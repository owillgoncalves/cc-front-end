import logoFooter from "../assets/logo-footer.svg";
import logoTrutec from "../assets/logo-trutec.png";

export default function Footer() {
  return (
    <footer className="flex h-20 items-center bg-primary text-primary-lighter">
      <div className="container mx-auto flex max-w-7xl items-center justify-between  px-4 sm:px-6 lg:px-8">
        <img src={logoFooter} alt="ConstruCode" className="mr-[91px]" />
        <p className="text-xs">ConstruCode - Todos os direitos reservados</p>
        <img src={logoTrutec} alt="Uma Solução Trutec by Vedacit" />
      </div>
    </footer>
  );
}
