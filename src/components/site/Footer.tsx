import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Ambulance } from "lucide-react";
import { CONTACT } from "@/data/hospital";
import logo from "@/assets/hospital/logo.png";

const Footer = () => {
  return (
    <footer className="mt-32 bg-primary text-primary-foreground">
      <div className="container-wide py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="bg-primary-foreground rounded-2xl p-3 inline-block">
            <img src={logo} alt="Kute Hospital" className="h-12 w-auto object-contain" />
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed">
            Compassionate, modern multi-specialty care for Sangamner and surrounding regions since 2003.
          </p>
        </div>
          <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed">
            Compassionate, modern multi-specialty care for Sangamner and surrounding regions since 2003.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/doctors", "Our Doctors"],
              ["/patients", "Patient Info"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-primary-foreground/80 hover:text-primary-foreground link-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-5">Reach Us</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 text-primary-glow" />
              <div>
                <div>Enquiry: <a href={`tel:${CONTACT.enquiry}`} className="hover:underline">{CONTACT.enquiry}</a></div>
                <div>Helpline: <a href={`tel:${CONTACT.helpline}`} className="hover:underline">{CONTACT.helpline}</a></div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Ambulance className="w-4 h-4 mt-1 text-primary-glow" />
              <a href={`tel:${CONTACT.ambulance}`} className="hover:underline">Ambulance: {CONTACT.ambulance}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 text-primary-glow" />
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-primary-glow" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-5">Hours</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>OPD · Mon–Sat · 9:00 AM – 8:00 PM</li>
            <li>Sunday · By appointment</li>
            <li>Emergency · 24×7</li>
            <li>ICU · 24×7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Kute Hospital. All rights reserved.</div>
          <div>Crafted with care · Sangamner, Maharashtra</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
