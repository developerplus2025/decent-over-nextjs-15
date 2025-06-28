import { authMiddleware } from "@workos-inc/authkit-nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // ✅ áp dụng cho tất cả route (trừ API, static)
};