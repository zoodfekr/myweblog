// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { UserIsAdmin } from "./services/fetch/auth_service";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token_myweblog")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const status = await UserIsAdmin({ token });

  if (!status) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
