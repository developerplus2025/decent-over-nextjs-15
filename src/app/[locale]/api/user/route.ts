// app/api/user/route.ts
import { withAuth } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  const { user } = await withAuth();
  return NextResponse.json({ user });
}
