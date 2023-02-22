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
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
