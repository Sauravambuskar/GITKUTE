import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import { SERVICES, INSURANCE } from "@/data/hospital";
import icu from "@/assets/hospital/icu.jpg";
import pathology from "@/assets/hospital/pathology.jpg";
import ot from "@/assets/hospital/ot.jpg";


const Services = () => {
  return (
    <>
      <SEO
        canonical="/services"
        title="Hospital Services in Sangamner — Surgery, ICU, Maternity, Pathology"
        description="Kute Hospital Sangamner offers 24×7 emergency & ICU, laparoscopy (keyhole surgery), maternity & childcare, pathology lab, ambulance service, and general OPD. Expert care close to home."
        image="https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9858-768x512.jpg"
      />
      <PageHero
        eyebrow="Our services"
        title={<>Modern medicine, <em className="italic text-primary">gentle hands.</em></>}
        subtitle="From everyday OPD consultations to advanced surgical and critical care — explore the full range of services available at Kute Hospital."
        image={ot}
      />

      {/* Service cards */}
      <section className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Facility highlights */}
      <section className="container-wide py-20 space-y-16">
        {[
          { img: icu, title: "Modern ICU", body: "Multi-bed ICU with multi-para monitors, ventilators, infusion pumps and 24×7 trained intensivists and critical care nurses." },
          { img: pathology, title: "In-house Pathology Lab", body: "Hematology, biochemistry, serology and microbiology — fast, accurate, with same-day reporting for most tests.", reverse: true },
          { img: ot, title: "Sterile Modular OT", body: "A modular operating theatre meeting modern hygiene and equipment standards for safe surgical outcomes." },
        ].map((row, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${row.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={row.img} alt={row.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
            </div>
            <div>
              <div className="eyebrow">Facility</div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-balance">{row.title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">{row.body}</p>
              <ul className="mt-6 space-y-2">
                {["Trained nursing staff", "Modern equipment", "Hygiene protocols", "24×7 availability"].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Insurance */}
      <section className="container-wide py-20">
        <div className="rounded-[2rem] bg-gradient-soft border border-border/60 p-10 md:p-14">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center">Cashless & insurance</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">Empanelled with leading insurers & schemes.</h2>
            <p className="mt-4 text-muted-foreground">We accept cashless treatment with most major TPAs and government health schemes.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INSURANCE.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-card border border-border/60 text-sm shadow-soft">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-balance max-w-2xl mx-auto">Not sure which service you need? We'll guide you.</h2>
        <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-primary h-12 px-7">
          <Link to="/contact">Talk to us <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </section>
    </>
  );
};

export default Services;
