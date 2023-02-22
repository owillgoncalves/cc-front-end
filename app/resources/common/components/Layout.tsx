import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header>
        <Button className="ml-11" size="small">
          Suporte via chat
        </Button>
      </Header>
      <main className="container mx-auto max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
