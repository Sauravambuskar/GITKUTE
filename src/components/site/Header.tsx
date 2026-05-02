import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Phone, ChevronDown,
  HeartPulse, Activity, Stethoscope, Baby, Microscope, Ambulance, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/hospital";
import logo from "@/assets/hospital/logo.png";

/* ─── Mega-menu service items ─── */
const SERVICE_ITEMS = [
  {
    slug: "emergency-icu",
    title: "24×7 Emergency & ICU",
    short: "Immediate care for accidents & critical emergencies.",
    Icon: HeartPulse,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/40",
  },
  {
    slug: "surgery",
    title: "Laparoscopy Surgery",
    short: "Keyhole procedures for gallbladder, hernia & more.",
    Icon: Activity,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/40",
  },
  {
    slug: "general-medicine",
    title: "General Medicine & OPD",
    short: "Expert care for fever, diabetes, BP and more.",
    Icon: Stethoscope,
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/40",
  },
  {
    slug: "maternity",
    title: "Maternity & Childcare",
    short: "Safe deliveries and caring doctors for your baby.",
    Icon: Baby,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950/40",
  },
  {
    slug: "pathology",
    title: "Pathology Lab",
    short: "Same-day blood tests with accurate reporting.",
    Icon: Microscope,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    slug: "ambulance",
    title: "Ambulance Service",
    short: "24×7 emergency pickup across Sangamner taluka.",
    Icon: Ambulance,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
];

const TOP_NAV_BEFORE = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const TOP_NAV_AFTER = [
  { to: "/doctors", label: "Doctors" },
  { to: "/patients", label: "Patients" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close on navigation */
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  /* close mega on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current && !megaRef.current.contains(e.target as Node) &&
        megaBtnRef.current && !megaBtnRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* lock body scroll when mobile drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500">
        <div className={`transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-soft"
            : "bg-background/80 backdrop-blur-md"
        }`}>
          <div className="container-wide flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src={logo}
                alt="Kute Hospital"
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.03]"
              />
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-muted-foreground border-l border-border/70 pl-3 ml-1 leading-tight">
                Sangamner<br />Since 2010
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {TOP_NAV_BEFORE.map((n) => (
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

              {/* Services mega-menu trigger — after About */}
              <div className="relative">
                <button
                  ref={megaBtnRef}
                  onClick={() => setMegaOpen((o) => !o)}
                  aria-expanded={megaOpen}
                  className={`flex items-center gap-1 text-sm font-medium link-underline transition-colors ${
                    isServicesActive || megaOpen
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {TOP_NAV_AFTER.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
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

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CONTACT.enquiry.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" /> {CONTACT.enquiry}
              </a>
              <Button asChild className="rounded-full bg-gradient-primary hover:opacity-95 shadow-soft h-10 px-6">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full bg-card border border-border transition-colors hover:bg-muted"
            >
              <span className={`transition-all duration-300 ${mobileOpen ? "rotate-90" : ""}`}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </span>
            </button>
          </div>
        </div>

        {/* ── Desktop mega menu panel ── */}
        <div
          ref={megaRef}
          className={`hidden lg:block absolute top-full inset-x-0 transition-all duration-300 origin-top ${
            megaOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
          style={{ transformOrigin: "top center" }}
        >
          <div className="bg-background/98 backdrop-blur-2xl border-b border-border/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="container-wide py-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Our Services</p>
                  <h2 className="text-xl font-serif">What we treat &amp; how we help</h2>
                </div>
                <Link
                  to="/services"
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  onClick={() => setMegaOpen(false)}
                >
                  View all services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {SERVICE_ITEMS.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setMegaOpen(false)}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-border/60 hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${s.bg} grid place-items-center transition-transform group-hover:scale-110 duration-200`}>
                      <s.Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {s.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.short}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom banner */}
              <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Need help choosing? <span className="font-medium text-foreground">Our doctors will guide you.</span>
                </p>
                <Button asChild size="sm" className="rounded-full bg-gradient-primary h-9 px-5">
                  <Link to="/contact" onClick={() => setMegaOpen(false)}>Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile slide-in drawer ── */}
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-[min(320px,90vw)] z-50 bg-background border-l border-border/60 shadow-2xl flex flex-col transition-transform duration-400 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Kute Hospital" className="h-9 w-auto object-contain" />
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="grid place-items-center w-9 h-9 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
          {/* Home + About */}
          {TOP_NAV_BEFORE.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                  isActive ? "bg-primary-soft text-primary" : "text-foreground/80 hover:bg-muted"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* Services accordion — after About */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                isServicesActive ? "bg-primary-soft text-primary" : "text-foreground/80 hover:bg-muted"
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Sub-items */}
            <div
              className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${
                mobileServicesOpen ? "max-h-[600px]" : "max-h-0"
              }`}
            >
              <div className="ml-3 pl-3 border-l border-border/60 mt-1 space-y-1 pb-2">
                <NavLink
                  to="/services"
                  end
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? "text-primary bg-primary-soft" : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  All Services
                </NavLink>
                {SERVICE_ITEMS.map((s) => (
                  <NavLink
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm transition-colors ${
                        isActive ? "text-primary bg-primary-soft" : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`
                    }
                  >
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg ${s.bg} grid place-items-center`}>
                      <s.Icon className={`w-3.5 h-3.5 ${s.color}`} />
                    </div>
                    {s.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Doctors + Patients + Contact */}
          {TOP_NAV_AFTER.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                  isActive ? "bg-primary-soft text-primary" : "text-foreground/80 hover:bg-muted"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-5 border-t border-border/60 space-y-3">
          <a
            href={`tel:${CONTACT.enquiry.replace(/\s/g, "")}`}
            className="flex items-center gap-3 py-3 px-4 rounded-xl bg-muted text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            {CONTACT.enquiry}
          </a>
          <Button asChild className="w-full rounded-full bg-gradient-primary h-12">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Book Appointment
            </Link>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Header;
