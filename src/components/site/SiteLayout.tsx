import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main key={pathname} className="flex-1 pt-20 animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
