import { redirect } from "@remix-run/node";

export const loader = () => {
  const redirectedResponse = redirect("/videos");
  return redirectedResponse;
};