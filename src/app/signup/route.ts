import { getSignUpUrl } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

export const GET = async () => {
  const signInUrl = await getSignUpUrl();

  return redirect(signInUrl);
};
