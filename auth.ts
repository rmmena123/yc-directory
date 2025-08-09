import NextAuth, { Profile } from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

/**
 * The shape of the profile object returned by the GitHub provider.
 * The `id` is a number, and `bio` can be null.
 */
interface GitHubProfile extends Profile {
  id: string;
  login: string;
  bio: string | null;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, profile }) {
      if (!profile) return false;

      const { name, email, image } = user;
      const { id, login, bio } = profile as GitHubProfile;

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubProfile = profile as GitHubProfile;
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: githubProfile.id,
          });

        token.id = user?._id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session.user, { id: token.id });
      return session;
    },
  },
});
