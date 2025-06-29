import { withAuth } from "@workos-inc/authkit-nextjs";
import NavigationClient from "./NavigationClient";

export default async function NavigationServer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { user } = await withAuth();
  return (
    <NavigationClient className={className} user={user}>
      {children}
    </NavigationClient>
  );
}
