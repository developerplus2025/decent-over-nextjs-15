import { withAuth } from "@workos-inc/authkit-nextjs";
import UserButtonClient from "./UserButtonClient";

export default async function UserButtonServer() {
  const { user } = await withAuth();
  return <UserButtonClient user={user} />;
}
