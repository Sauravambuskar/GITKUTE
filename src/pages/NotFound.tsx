import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Stethoscope } from "lucide-react";
import SEO from "@/components/site/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested page is not available at Kute Hospital."
        canonical={location.pathname}
        noIndex
      />
      <section className="container-wide min-h-[70vh] flex items-center justify-center py-24">
        <div className="max-w-xl text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary-soft text-primary grid place-items-center">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div className="eyebrow justify-center mt-7">404 · Page unavailable</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-serif">This service is not offered.</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            The page you requested has been permanently removed. Please view our current departments and hospital facilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full bg-gradient-primary">
              <Link to="/services"><ArrowLeft className="w-4 h-4" /> View Current Departments</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
