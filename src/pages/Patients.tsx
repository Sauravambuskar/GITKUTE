import { Link } from "react-router-dom";
import { ArrowRight, FileText, CreditCard, ClipboardList, Clock, Quote, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/site/PageHero";
import { FAQ, INSURANCE, TESTIMONIALS, HOSPITAL_IMAGES } from "@/data/hospital";
import icu from "@/assets/hospital/icu.jpg";
import pathology from "@/assets/hospital/pathology.jpg";
const care = "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9726-768x512.jpg";

const INFO = [
  { icon: ClipboardList, title: "What to bring", body: "Photo ID, prior medical reports, current medication list, and insurance/TPA card if applicable." },
  { icon: Clock, title: "OPD timings", body: "Mon–Sat · 9:00 AM – 8:00 PM. Sunday OPD by appointment. Emergency open 24×7." },
  { icon: CreditCard, title: "Billing & payment", body: "Cash, UPI, debit/credit card and cashless insurance accepted. Transparent itemised bills." },
  { icon: FileText, title: "Reports & records", body: "Pathology reports usually delivered the same day. Soft copies available on request." },
];

const Patients = () => {
  return (
    <>
      <PageHero
        eyebrow="For patients"
        title={<>Everything you need, <em className="italic text-primary">in one place.</em></>}
        subtitle="Visiting Kute Hospital? Here's a quick guide to make your visit smooth and stress-free."
        image={care}
      />

      {/* Info cards */}
      <section className="container-wide py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFO.map((i) => {
            const Icon = i.icon;
            return (
              <div key={i.title} className="p-7 rounded-3xl bg-card border border-border/60 shadow-soft">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary-soft text-primary"><Icon className="w-6 h-6" /></div>
                <h3 className="mt-5 font-serif text-xl">{i.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery - all real hospital photos */}
      <section className="container-wide py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow justify-center">Inside Kute Hospital</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">A look at our facility.</h2>
          <p className="mt-3 text-muted-foreground text-sm">Real photos from our hospital — wards, OPD, staff and patient care areas.</p>
        </div>
        {/* Featured large image */}
        <div className="rounded-3xl overflow-hidden shadow-card mb-4">
          <img
            src={HOSPITAL_IMAGES[0].src}
            alt={HOSPITAL_IMAGES[0].alt}
            className="w-full h-[280px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        {/* 3-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {HOSPITAL_IMAGES.slice(1).map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-wide py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">Patient stories</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif text-balance">From the families we serve.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft">
              <Quote className="w-8 h-8 text-primary/30" />
              <blockquote className="mt-4 leading-relaxed text-pretty">"{t.quote}"</blockquote>
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

      {/* FAQ */}
      <section className="container-narrow py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow justify-center">Common questions</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">Frequently asked questions.</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl bg-card border border-border/60 px-6 shadow-soft">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Insurance */}
      <section className="container-wide py-16">
        <div className="rounded-[2rem] bg-gradient-soft border border-border/60 p-10 md:p-14 text-center">
          <div className="eyebrow justify-center">Cashless & insurance</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">We accept most insurance partners.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {INSURANCE.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-card border border-border/60 text-sm shadow-soft">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-balance max-w-2xl mx-auto">Ready to book your visit?</h2>
        <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-primary h-12 px-7">
          <Link to="/contact">Book appointment <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </section>
    </>
  );
};

export default Patients;
