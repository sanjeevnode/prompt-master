export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/profile/:id*", "/create-prompt", "/update-prompt"],
};
