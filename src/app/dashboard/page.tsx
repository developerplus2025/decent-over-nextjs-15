import {
  withAuth,
  getSignInUrl,
  getSignUpUrl,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  const { user } = await withAuth();
  if (!user) {
    const signInUrl = await getSignInUrl();
    const signUpUrl = await getSignUpUrl();
    return (
      <>
        <a href={signInUrl}>Log in</a>
        <a href={signUpUrl}>Sign Up</a>
      </>
    );
  }
  async function handleSignOut() {
    "use server";
    await signOut();
  }

  return (
    <form>
      <p>Welcome back {user.firstName}</p>
      <button onClick={async () => await handleSignOut()} type="button">Sign out</button>
    </form>
  );
}
