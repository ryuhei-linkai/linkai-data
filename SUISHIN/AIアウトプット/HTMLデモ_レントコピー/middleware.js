import { next } from "@vercel/functions";

const USERNAME = process.env.BASIC_AUTH_USER || "nissei";
const PASSWORD = process.env.BASIC_AUTH_PASSWORD || "demo2026";

function unauthorized() {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="NISSEI Demo", charset="UTF-8"',
      "Cache-Control": "no-store"
    }
  });
}

function decodeBasicAuth(header) {
  if (!header || !header.startsWith("Basic ")) return null;
  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(":");
    if (separator === -1) return null;
    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1)
    };
  } catch {
    return null;
  }
}

export default function middleware(request) {
  const credentials = decodeBasicAuth(request.headers.get("authorization"));

  if (!credentials || credentials.username !== USERNAME || credentials.password !== PASSWORD) {
    return unauthorized();
  }

  return next();
}

export const config = {
  matcher: ["/((?!favicon.ico).*)"],
  runtime: "edge"
};
