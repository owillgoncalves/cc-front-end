import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import CatchBoundaryComponent from "./resources/common/components/CatchBoundary";
import ErrorBoundaryComponent from "./resources/common/components/ErrorBoundary";
import Layout from "./resources/common/components/Layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "ConstruCode - Vídeos Tutoriais",
  viewport: "width=device-width,initial-scale=1",
});

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <ErrorBoundaryComponent error={{ message: error.message }} />
  );
};

export const CatchBoundary = () => {
  const error = useCatch();
  const location = useLocation();
  return <CatchBoundaryComponent error={error} pathname={location.pathname} />;
};

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
