"use client";

/**
 * Example of a client component using the useAuth hook to get the current user session.
 */

import { Button, Flex } from "@radix-ui/themes";
import { useAuth } from "@workos-inc/authkit-nextjs/components";
import { handleSignOutAction } from "../../app/[locale]/actions/signOut";
import Link from "next/link";

export function SignInButton({ large }: { large?: boolean }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <Flex gap="3">
        <form action={handleSignOutAction}>
          <Button type="submit" size={large ? "3" : "2"}>
            Sign Out
          </Button>
        </form>
      </Flex>
    );
  }

  return (
    <Button asChild size={large ? "3" : "2"}>
      <Link href="/login">Sign In {large && "with AuthKit"}</Link>
    </Button>
  );
}
