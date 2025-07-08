// app/[locale]/docs/search/route.ts

import { getSource } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

// export handler phải là 1 function nhận params
export function GET(request: Request, context: { params: { locale: string } }) {
  const { locale } = context.params;
  const source = getSource(locale);
  return createFromSource(source).GET(request); // ✅ Đúng
}
