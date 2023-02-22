import { Meta, Links, Link, ScrollRestoration, Scripts, LiveReload } from "@remix-run/react";
import Button from "./Button";
import Header from "./Header";

export default function CatchBoundaryComponent ({
  error,
  pathname
}: {
  error: { status: number; statusText: string };
  pathname: string;
}) {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header links={[]} overrideLinks />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Nada por aqui...</h1>
          <p className="mt-2 text-2xl text-red-500">
            {error.status} | {error.statusText}
          </p>
          <p className="mt-2 text-primary">
            O recurso solicitado não foi encontrado em "{pathname}"". A
            página pode estar em manutenção, ou temporariamente indisponível.
          </p>
          <Link to="/">
            <Button className="mt-8 text-primary">
              Clique aqui para voltar à página inicial
            </Button>
          </Link>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}