import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/api/uploadthing",
  ],
  ignoredRoutes: [
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/api/uploadthing",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
