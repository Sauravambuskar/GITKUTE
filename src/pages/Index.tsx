import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Ambulance, Clock, ShieldCheck, Star, Quote, Camera, MapPin, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/site/SEO";
import { SERVICES, TESTIMONIALS, STATS, VALUES, CONTACT, DOCTORS } from "@/data/hospital";

import drKuteImg from "@/assets/hospital/dr-kute.jpg";
const careImg = "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9726-768x512.jpg";
const realExterior = "https://backup.kutehospital.com/wp-content/uploads/2024/02/im-1536x864.jpg";
const realStaff1 = "https://backup.kutehospital.com/wp-content/uploads/2024/02/1708542342224.jpg"; // Dr Kute with patient
const realStaff2 = "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9877-768x512.jpg";

const Index = () => {
  return (
    <>
      <SEO
        canonical="/"
        title="Kute Hospital — Expert Surgery & 24×7 Emergency Care in Sangamner"
        description="Kute Hospital in Sangamner offers expert laparoscopy, 24×7 ICU & emergency care, maternity services, pathology lab, and visiting specialists. Call +91 88888 82225 to book."
        image="https://backup.kutehospital.com/wp-content/uploads/2024/02/im-1536x864.jpg"
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="container-wide relative pt-8 md:pt-12 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Sangamner · Multi-specialty
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-[1.02] text-balance animate-fade-up tracking-tight" style={{ animationDelay: "60ms" }}>
              Expert laparoscopy &amp; surgical care
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty animate-fade-up" style={{ animationDelay: "120ms" }}>
              For over 14 years, Kute Hospital has been Sangamner's trusted home for compassionate, modern healthcare — from 24×7 emergency to advanced keyhole surgeries.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "180ms" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-primary shadow-elegant hover:opacity-95 h-12 px-7">
                <Link to="/contact">
                  <Calendar className="w-4 h-4" /> Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="rounded-full h-12 px-7 bg-gradient-accent text-accent-foreground hover:opacity-95 shadow-soft">
                <a href={`tel:${CONTACT.ambulance}`}>
                  <Ambulance className="w-4 h-4" /> Ambulance · {CONTACT.ambulance}
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[280px] sm:h-[380px] md:h-[460px] w-full rounded-[2rem] overflow-hidden shadow-elegant animate-scale-in">
              <img src={realExterior} alt="Kute Hospital exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" width={1024} height={576} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Floating Reviews Card */}
              <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 bg-card/95 backdrop-blur-md p-5 sm:p-6 rounded-[1.5rem] shadow-xl flex flex-col justify-center animate-fade-up border border-white/20" style={{ animationDelay: "300ms" }}>
                 <div className="flex text-accent mb-2">
                   {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />)}
                 </div>
                 <div className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">4.8/5</div>
                 <div className="text-xs sm:text-sm text-muted-foreground mt-1">168+ JustDial Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR & STATS */}
      <section className="relative z-10 -mt-8 mx-4 lg:mx-auto max-w-7xl animate-fade-up" style={{ animationDelay: "400ms" }}>
        <div className="bg-primary text-primary-foreground rounded-3xl shadow-elegant overflow-hidden">
          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
            <div className="flex items-center gap-4 p-6 md:p-8">
               <ShieldCheck className="w-10 h-10 text-accent shrink-0" />
               <div>
                 <div className="font-semibold text-lg">NABH Pre-Accredited</div>
                 <div className="text-sm opacity-80">Certified Quality Care</div>
               </div>
            </div>
            <div className="flex items-center gap-4 p-6 md:p-8 bg-primary/50">
               <ShieldCheck className="w-10 h-10 text-accent shrink-0" />
               <div>
                 <div className="font-semibold text-lg">ECHS Empanelled</div>
                 <div className="text-sm opacity-80">Serving Veterans</div>
               </div>
            </div>
            <div className="flex items-center gap-4 p-6 md:p-8">
               <ShieldCheck className="w-10 h-10 text-accent shrink-0" />
               <div>
                 <div className="font-semibold text-lg">Cashless Insurance</div>
                 <div className="text-sm opacity-80">All Major TPAs Accepted</div>
               </div>
            </div>
          </div>
          
          {/* Stats Strip */}
          <div className="bg-[#132A4C] py-6 border-t border-primary-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 text-center">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-serif text-accent font-semibold">{s.value}</div>
                  <div className="text-sm font-medium mt-1 text-primary-foreground/90">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section className="container-wide pt-24 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow justify-center"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Watch the tour</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance">
            Step inside Kute Hospital.
          </h2>
          <p className="mt-4 text-muted-foreground">A short walk-through of our facility, our team, and the care we deliver every day.</p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-warm rounded-[2.5rem] opacity-20 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-border/60 bg-card">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/sP9eHwJOQIA?rel=0&modestbranding=1"
                title="Kute Hospital — Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-wide py-16">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white grid place-items-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
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
            <img src={realStaff1} alt="Kute Hospital staff" className="rounded-3xl aspect-[4/5] object-cover shadow-soft" loading="lazy" />
            <img src={realStaff2} alt="Hospital care" className="rounded-3xl aspect-[4/5] object-cover shadow-soft mt-10" loading="lazy" />
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
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#132A4C] text-primary-foreground p-7 md:p-16 grid lg:grid-cols-12 gap-8 md:gap-10 items-center shadow-elegant">
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-primary/40 blur-3xl" />
          
          <div className="lg:col-span-5 relative z-10">
            <div className="aspect-[4/5] rounded-[2rem] bg-white shadow-elegant ring-4 ring-white/10 overflow-hidden">
              <img
                src={drKuteImg}
                alt="Dr. Pradeep Kute"
                className="w-full h-full object-cover object-right hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 relative z-10 pl-0 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Meet our founder
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance font-medium">
              Dr. Pradeep Kute
              <span className="block text-primary-foreground/70 text-2xl md:text-3xl mt-3 font-normal">MBBS, MS (General Surgery)</span>
            </h2>
            
            <p className="mt-6 text-primary-foreground/80 leading-relaxed max-w-xl text-lg">
              With over 14 years of surgical excellence, Dr. Kute has performed thousands of successful procedures. He leads our team with an unwavering belief that every patient deserves compassionate, city-grade healthcare right here in Sangamner.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:opacity-90 shadow-soft h-14 px-8 text-base">
                <Link to="/contact">Book Appointment <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 border-white/20 bg-transparent hover:bg-white/10 text-white text-base">
                <a href={`tel:${CONTACT.enquiry}`}><Phone className="w-5 h-5 mr-2" /> {CONTACT.enquiry}</a>
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
            <figure key={t.name} className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card transition-shadow flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <blockquote className="text-foreground leading-relaxed text-pretty flex-1">"{t.quote}"</blockquote>
              <div className="mt-6 pt-6 border-t border-border/50">
                 <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Treated for: {(t as any).treatment || "General Care"}</div>
                 <figcaption className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-medium shadow-inner">{t.name[0]}</div>
                   <div>
                     <div className="font-semibold">{t.name}</div>
                     <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {t.location}
                     </div>
                   </div>
                 </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION WITH MAP PLACEHOLDER */}
      <section className="container-wide py-24 mb-10">
        <div className="grid lg:grid-cols-2 gap-0 bg-card rounded-[3rem] border border-border/60 shadow-elegant overflow-hidden">
           <div className="p-10 md:p-16 lg:pr-8">
              <div className="eyebrow">Visit Us</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance mb-8">
                Here when you need us.
              </h2>
              
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary grid place-items-center shrink-0">
                       <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-semibold text-lg mb-1">Hospital Address</div>
                       <div className="text-muted-foreground">Kute Hospital, 40 Feet DP Road,<br />Sangamner City, Maharashtra 422605</div>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary grid place-items-center shrink-0">
                       <Phone className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-semibold text-lg mb-1">Contact Numbers</div>
                       <div className="text-muted-foreground flex flex-col gap-1">
                          <a href="tel:+919922140353" className="hover:text-primary transition-colors">+91 99221 40353 (Emergency)</a>
                          <a href={`tel:${CONTACT.enquiry}`} className="hover:text-primary transition-colors">{CONTACT.enquiry} (OPD Enquiry)</a>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary grid place-items-center shrink-0">
                       <Clock className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-semibold text-lg mb-1">OPD Hours</div>
                       <div className="text-muted-foreground">Mon – Sat: 10:00 AM – 8:00 PM<br />Emergency &amp; ICU: 24×7 Open</div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Map */}
           <div className="bg-muted relative min-h-[400px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border/60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8615469607833!2d74.20456107522384!3d19.576839381711227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd00e4b868cb51%3A0xe9f798e21a238ec1!2sSangamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714578912345!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kute Hospital Map Location"
              />
           </div>
        </div>
      </section>
    </>
  );
};

export default Index;
