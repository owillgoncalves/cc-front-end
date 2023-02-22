import { BrowserRouter } from "react-router-dom";

// This is a workaround to avoid the following error:
// Uncaught [Error: (**some router resource**) may be used only in the context of a <Router> component.]

export function FakeRouter({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}