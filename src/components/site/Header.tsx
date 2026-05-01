import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/hospital";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/patients", label: "Patients" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft group-hover:scale-105 transition-transform">
            <Stethoscope className="w-5 h-5" />
          </span>
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold tracking-tight">Kute Hospital</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Sangamner · Since 2003</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium link-underline transition-colors ${
                  isActive ? "text-primary" : "text-foreground/75 hover:text-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.enquiry.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" /> {CONTACT.enquiry}
          </a>
          <Button asChild className="rounded-full bg-gradient-primary hover:opacity-95 shadow-soft">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full bg-card border border-border"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-t border-border/60`}
      >
        <div className="container-wide py-6 flex flex-col gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                  isActive ? "bg-primary-soft text-primary" : "text-foreground/80 hover:bg-muted"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Button asChild className="mt-4 rounded-full bg-gradient-primary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
