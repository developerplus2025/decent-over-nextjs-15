import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getDb } from "./db";
import type { BetterAuthPlugin } from "better-auth";
const db = await getDb();

const updateAvatarPlugin = (): BetterAuthPlugin => ({
  id: "update-avatar",
  hooks: {
    after: [
      {
        matcher: (ctx) => ctx.path.startsWith("/api/auth/callback/github"),
        handler: async (ctx) => {
          const result = (ctx as any).result;
          const account = result?.account;
          const session = result?.session;

          if (account?.provider === "github" && account.profile?.image) {
            await db
              .collection("user")
              .updateOne(
                { id: session.user.id },
                { $set: { image: account.profile.image } },
              );

            // Optional: cập nhật lại trong session trả về
            result.session.user.image = account.profile.image;
          }

          return ctx;
        },
      },
    ],
  },
});

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
  plugins: [updateAvatarPlugin()],
});