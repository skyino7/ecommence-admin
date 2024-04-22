import { authMiddleware } from "@clerk/nextjs/server";

const clerkMiddleware = authMiddleware({}); // Initialize the middleware

export default clerkMiddleware;

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
