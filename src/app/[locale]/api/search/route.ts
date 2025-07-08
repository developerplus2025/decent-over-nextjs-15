import { getSource } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname; // ví dụ: /en/api/search
  const locale = pathname.split("/")[1]; // lấy 'en'

  const source = getSource(locale);
  return createFromSource(source).GET(request);
}
