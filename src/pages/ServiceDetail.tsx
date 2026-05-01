import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, CONTACT } from "@/data/hospital";

import icu from "@/assets/hospital/icu.jpg";
import pathology from "@/assets/hospital/pathology.jpg";
import ot from "@/assets/hospital/ot.jpg";
import care from "@/assets/hospital/care.jpg";
import reception from "@/assets/hospital/reception.jpg";

const IMAGES = { icu, pathology, ot, care, reception } as const;

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const heroImg = IMAGES[service.image];
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="container-wide relative pt-12 pb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Link to="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors animate-fade-up">
              <ArrowLeft className="w-4 h-4" /> All services
            </Link>
            <div className="mt-6 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "60ms" }}>
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-warm text-primary-foreground shadow-soft">
                <Icon className="w-6 h-6" />
              </div>
              <span className="eyebrow">Service</span>
            </div>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl font-medium leading-[1.05] text-balance animate-fade-up" style={{ animationDelay: "120ms" }}>
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl animate-fade-up" style={{ animationDelay: "180ms" }}>
              {service.body}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-primary h-12 px-7 shadow-elegant">
                <Link to="/contact"><Calendar className="w-4 h-4" /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-accent/40 text-accent hover:bg-accent-soft hover:text-accent">
                <a href={`tel:${CONTACT.helpline}`}><Phone className="w-4 h-4" /> {CONTACT.helpline}</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-elegant animate-scale-in">
              <img src={heroImg} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-wide py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="eyebrow text-accent">What's included</div>
            <h2 className="mt-3 font-serif text-4xl text-balance">Care designed around you.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every service at Kute Hospital is built around the same principles — modern equipment, trained staff, and warmth in every interaction.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all">
                <div className="grid place-items-center w-8 h-8 shrink-0 rounded-lg bg-accent-soft text-accent">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium leading-snug pt-1">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-wide py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">How it works</div>
          <h2 className="mt-3 font-serif text-4xl text-balance">A simple, supportive journey.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {service.process.map((p, i) => (
            <div key={p.step} className="relative p-7 rounded-3xl bg-card border border-border/60 shadow-soft">
              <div className="font-serif text-5xl text-accent/30 leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-serif text-xl">{p.step}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-16">
        <div className="rounded-[2rem] bg-gradient-warm text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] opacity-80">Ready when you are</div>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 text-balance">Talk to our {service.title.toLowerCase()} team.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-7">
              <Link to="/contact"><Calendar className="w-4 h-4" /> Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={`tel:${CONTACT.enquiry}`}><Phone className="w-4 h-4" /> {CONTACT.enquiry}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="container-wide py-16">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <div className="eyebrow">Continue exploring</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-balance">Other services at Kute Hospital.</h2>
          </div>
          <Link to="/services" className="text-sm text-primary inline-flex items-center gap-1 link-underline">
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((o) => {
            const OIcon = o.icon;
            return (
              <Link key={o.slug} to={`/services/${o.slug}`} className="group p-7 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary-soft text-primary group-hover:bg-gradient-warm group-hover:text-primary-foreground transition-colors">
                  <OIcon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.short}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
