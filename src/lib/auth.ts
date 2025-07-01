import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getDb } from "./db";
import type { BetterAuthPlugin } from "better-auth";
import { betterAuth, type Middleware } from "better-auth";

const db = await getDb();
type SignInContext = {
  type: "auth:signin";
  provider: string;
  account: {
    profile?: {
      avatar_url?: string;
    };
  };
  user: {
    id: string;
  };
  database: {
    user: {
      update: (input: {
        where: { id: string };
        data: { image?: string };
      }) => Promise<void>;
    };
  };
};

const githubAvatarMiddleware: Middleware = async (ctx: SignInContext) => {
  if (ctx.provider === "github") {
    const avatar = ctx.account?.profile?.avatar_url;
    if (avatar) {
      await ctx.database.user.update({
        where: { id: ctx.user.id },
        data: { image: avatar },
      });
    }
  }
};

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  middleware: [githubAvatarMiddleware],
});
