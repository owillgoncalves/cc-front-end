import {
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  LiveReload,
  Link,
} from "@remix-run/react";
import Button from "./Button";
import Header from "./Header";

export default function ErrorBoundaryComponent({
  error,
}: {
  error: { message: string };
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
          <h1 className="text-5xl font-bold">Algo deu errado</h1>
          <p className="mt-2 text-primary">
            Ocorreu um erro inesperado, tente novamente mais tarde.
          </p>
          <p className="mt-2 text-2xl text-red-500">{error.message}</p>
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
