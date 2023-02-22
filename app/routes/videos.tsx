import { Outlet } from "@remix-run/react";
import ChatCTA from "~/resources/videos/components/ChatCTA";

export default function Videos() {
  return (
    <>
      <Outlet />
      <ChatCTA />
    </>
  );
}
