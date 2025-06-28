import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function Page() {
  const { user } = await withAuth(); // user sẽ null nếu chưa đăng nhập
  // Hoặc yêu cầu đăng nhập:
  const { user: u2 } = await withAuth({ ensureSignedIn: true });
}
