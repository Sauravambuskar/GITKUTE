import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, SERVICES } from "@/data/hospital";
import logo from "@/assets/hospital/logo.png";

const nav = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" }, { to: "/patients", label: "Patients" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); setDepartmentsOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 border-b transition-all ${scrolled ? "bg-background/95 backdrop-blur-xl border-border/60 shadow-soft" : "bg-background/85 backdrop-blur-md border-transparent"}`}>
        <div className="container-wide h-16 md:h-20 flex items-center justify-between gap-5">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Kute Hospital" className="h-10 md:h-12 w-auto object-contain" />
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground border-l pl-3">Sangamner<br />16 years of care</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {nav.slice(0, 2).map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>{item.label}</NavLink>)}
            <button onClick={() => setDepartmentsOpen(!departmentsOpen)} className={`flex items-center gap-1 text-sm font-medium ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground/70 hover:text-primary"}`} aria-expanded={departmentsOpen}>Departments <ChevronDown className={`w-4 h-4 transition-transform ${departmentsOpen ? "rotate-180" : ""}`} /></button>
            {nav.slice(2).map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>{item.label}</NavLink>)}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${CONTACT.helpline.replace(/\s/g, "")}`} className="text-sm font-semibold flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4" />{CONTACT.helpline}</a>
            <Button asChild className="rounded-full bg-gradient-primary"><Link to="/contact">Book Appointment</Link></Button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 rounded-full border bg-card grid place-items-center" aria-label="Toggle menu">{mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>

        <div className={`hidden lg:block absolute top-full inset-x-0 bg-background/98 backdrop-blur-xl border-b shadow-xl transition-all origin-top ${departmentsOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}>
          <div className="container-wide py-7">
            <div className="flex justify-between items-end mb-5"><div><div className="eyebrow">Clinical departments</div><h2 className="text-2xl mt-1">Specialist care under one roof</h2></div><Link to="/services" className="text-sm text-primary flex items-center gap-1">All facilities <ArrowRight className="w-4 h-4" /></Link></div>
            <div className="grid grid-cols-4 gap-3">
              {SERVICES.map((service) => { const Icon = service.icon; return <Link key={service.slug} to={`/services/${service.slug}`} className="group flex gap-3 p-3 rounded-2xl hover:bg-muted"><span className="w-10 h-10 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0"><Icon className="w-5 h-5" /></span><span><strong className="block text-sm group-hover:text-primary">{service.title}</strong><small className="text-muted-foreground line-clamp-1">{service.short}</small></span></Link>; })}
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-sm lg:hidden transition-opacity ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />
      <aside className={`fixed top-0 right-0 z-50 h-full w-[min(360px,92vw)] bg-background shadow-2xl lg:hidden transition-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 border-b flex items-center justify-between"><img src={logo} alt="Kute Hospital" className="h-10" /><button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-full bg-muted grid place-items-center"><X className="w-4 h-4" /></button></div>
        <nav className="p-4 h-[calc(100%-160px)] overflow-y-auto">
          {nav.slice(0, 2).map((item) => <NavLink key={item.to} to={item.to} className="block p-3 rounded-xl hover:bg-muted font-medium">{item.label}</NavLink>)}
          <button onClick={() => setDepartmentsOpen(!departmentsOpen)} className="w-full flex justify-between items-center p-3 rounded-xl hover:bg-muted font-medium">Departments <ChevronDown className={`w-4 h-4 ${departmentsOpen ? "rotate-180" : ""}`} /></button>
          {departmentsOpen && <div className="ml-3 pl-3 border-l space-y-1">{SERVICES.map((service) => { const Icon = service.icon; return <NavLink key={service.slug} to={`/services/${service.slug}`} className="flex items-center gap-2 p-2.5 rounded-lg text-sm hover:bg-muted"><Icon className="w-4 h-4 text-primary" />{service.title}</NavLink>; })}<NavLink to="/services" className="block p-2.5 text-sm font-semibold text-primary">View all facilities</NavLink></div>}
          {nav.slice(2).map((item) => <NavLink key={item.to} to={item.to} className="block p-3 rounded-xl hover:bg-muted font-medium">{item.label}</NavLink>)}
        </nav>
        <div className="absolute bottom-0 inset-x-0 p-4 border-t bg-background"><Button asChild className="w-full h-12 rounded-full bg-gradient-primary"><a href={`tel:${CONTACT.emergency.replace(/\s/g, "")}`}><Phone className="w-4 h-4" /> Emergency {CONTACT.emergency}</a></Button></div>
      </aside>
    </>
  );
};

export default Header;
