import { betterAuth, type Middleware } from "better-auth";
import Database from "better-sqlite3";

/**
 * Kết nối SQLite
 */
const db = new Database("./sqlite.db");
type SignInContext = {
  type: "auth:signin";
  provider: string;
  account: {
    profile?: {
      avatar_url?: string;
      picture?: string;
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
/**
 * Middleware cập nhật avatar Google
 */
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
const googleAvatarMiddleware: Middleware = async (ctx: SignInContext) => {
  if (ctx.provider === "google") {
    const avatar = ctx.account?.profile?.picture;
    if (avatar) {
      await ctx.database.user.update({
        where: { id: ctx.user.id },
        data: { image: avatar },
      });
    }
  }
};

/**
 * Cấu hình Better Auth
 */
export const auth = betterAuth({
  database: db,

  emailAndPassword: { enabled: true },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => ({
        firstName: profile.given_name,
        lastName: profile.family_name,
        image: profile.picture,
      }),
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => ({
        firstName: profile.name,
        image: profile.avatar_url,
      }),
    },
  },

  middleware: [googleAvatarMiddleware, githubAvatarMiddleware],
});
