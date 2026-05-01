import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Ambulance, Clock, ShieldCheck, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, TESTIMONIALS, STATS, VALUES, CONTACT } from "@/data/hospital";
import heroImg from "@/assets/hospital/hero.jpg";
import receptionImg from "@/assets/hospital/reception.jpg";
import drKuteImg from "@/assets/hospital/dr-kute.jpg";
import careImg from "@/assets/hospital/care.jpg";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="container-wide relative pt-12 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Sangamner · Multi-specialty
            </div>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.02] text-balance animate-fade-up" style={{ animationDelay: "60ms" }}>
              Healing hands.<br />
              <span className="italic text-primary">Hopeful</span> hearts.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty animate-fade-up" style={{ animationDelay: "120ms" }}>
              For over two decades, Kute Hospital has been Sangamner's trusted home for compassionate, modern healthcare — from 24×7 emergency to gentle maternity care.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "180ms" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-primary shadow-elegant hover:opacity-95 h-12 px-7">
                <Link to="/contact">
                  <Calendar className="w-4 h-4" /> Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-foreground/15 hover:bg-card">
                <a href={`tel:${CONTACT.ambulance}`}>
                  <Ambulance className="w-4 h-4" /> Ambulance · {CONTACT.ambulance}
                </a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-md gap-6 animate-fade-up" style={{ animationDelay: "260ms" }}>
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden shadow-elegant animate-scale-in">
              <img src={heroImg} alt="Kute Hospital exterior" className="w-full h-full object-cover" width={1024} height={576} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="hidden md:flex absolute -left-6 bottom-10 glass-card p-5 max-w-[260px] gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary-soft text-primary"><Clock className="w-5 h-5" /></div>
              <div>
                <div className="text-sm font-medium">24×7 Emergency</div>
                <div className="text-xs text-muted-foreground">Critical care, always on.</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 top-10 glass-card p-5 max-w-[260px] gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent"><ShieldCheck className="w-5 h-5" /></div>
              <div>
                <div className="text-sm font-medium">Cashless Insurance</div>
                <div className="text-xs text-muted-foreground">PMJAY · MahaPreet · TPAs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-wide py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow">What we offer</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance max-w-2xl">
              A full circle of care, under one roof.
            </h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-primary inline-flex items-center gap-1 link-underline">
            Explore all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-7 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary-soft text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-serif">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="container-wide py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img src={receptionImg} alt="Reception" className="rounded-3xl aspect-[4/5] object-cover shadow-soft" loading="lazy" />
            <img src={careImg} alt="Compassionate care" className="rounded-3xl aspect-[4/5] object-cover shadow-soft mt-10" loading="lazy" />
          </div>
          <div className="lg:col-span-6">
            <div className="eyebrow">About Kute Hospital</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance">
              A neighbourhood hospital with city-grade care.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded by Dr. Pradeep Kute, our hospital was built on a simple promise: every patient deserves attentive, dignified, modern healthcare — close to home. Today we serve thousands of families across Sangamner taluka with a team of dedicated doctors, nurses and visiting specialists.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex gap-4">
                    <div className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-primary-soft text-primary"><Icon className="w-5 h-5" /></div>
                    <div>
                      <div className="font-medium">{v.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{v.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-9">
              <Button asChild className="rounded-full bg-gradient-primary">
                <Link to="/about">Read our story <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR HIGHLIGHT */}
      <section className="container-wide py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant ring-1 ring-primary-foreground/10">
              <img src={drKuteImg} alt="Dr. Pradeep Kute" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="eyebrow text-primary-foreground/70">Meet our founder</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
              Dr. Pradeep Kute
              <span className="block italic text-primary-glow text-2xl md:text-3xl mt-2">MBBS, MS — General Surgeon</span>
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed max-w-xl">
              Two decades of surgical experience, thousands of lives touched. Dr. Kute leads our team with an unwavering belief that quality healthcare is a right — not a privilege.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-7">
                <Link to="/doctors">Meet the team <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground">
                <a href={`tel:${CONTACT.enquiry}`}><Phone className="w-4 h-4" /> {CONTACT.enquiry}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-wide py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">Patient stories</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance">Words from the families we care for.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card transition-shadow">
              <Quote className="w-8 h-8 text-primary/30" />
              <blockquote className="mt-4 text-foreground leading-relaxed text-pretty">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-medium">{t.name[0]}</div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
                <div className="ml-auto flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-24">
        <div className="rounded-[2.5rem] bg-gradient-soft border border-border/60 p-10 md:p-16 text-center">
          <div className="eyebrow justify-center">We're here when you need us</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium text-balance max-w-2xl mx-auto">
            Have a question or need an appointment? Let's talk.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-primary h-12 px-7">
              <Link to="/contact"><Calendar className="w-4 h-4" /> Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-foreground/15">
              <a href={`tel:${CONTACT.helpline}`}><Phone className="w-4 h-4" /> {CONTACT.helpline}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
