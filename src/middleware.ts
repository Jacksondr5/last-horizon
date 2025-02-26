import { clerkMiddleware } from "@clerk/nextjs/server";

const isProtectedRoute = (path: string) => {
  return path.startsWith("/dashboard");
};

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req.nextUrl.pathname)) await auth.protect();
});

export const config = {
  // TODO: Add protected routes
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
