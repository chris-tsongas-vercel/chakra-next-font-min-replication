import type { NextMiddleware } from "next/server";
import { NextResponse } from "next/server";
import getDomain from "./lib/utils/getDomain";
export const middleware: NextMiddleware = async (req, _event) => {
  const url = req.nextUrl;
  const { href } = url;
  const host = req.headers.get("host") ?? "";
  const domain = getDomain(host);
  if (domain) {
    url.pathname = `/${domain}${url.pathname}`;
    console.info("Redirect:", href, "=>", url.href);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
};
export default middleware;
export const config = {
  matcher: ["/((?!api|_next).*)"],
};
