import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/site/PageHero";
import { DOCTORS } from "@/data/hospital";
import drKute from "@/assets/hospital/dr-kute.jpg";
import staff1 from "@/assets/hospital/staff-1.jpg";
import staff2 from "@/assets/hospital/staff-2.jpg";

const Doctors = () => {
  const featured = DOCTORS.find((d) => d.featured)!;
  const visiting = DOCTORS.filter((d) => !d.featured);

  return (
    <>
      <PageHero
        eyebrow="Our doctors"
        title={<>Skilled specialists. <em className="italic text-primary">Caring people.</em></>}
        subtitle="Meet the team that keeps Sangamner healthy — from our founder to our visiting consultants across every specialty."
        image={staff1}
      />

      {/* Featured: Dr. Kute */}
      <section className="container-wide py-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
              <img src={drKute} alt={featured.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Founder & Chief Surgeon</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">{featured.name}</h2>
            <div className="mt-2 text-primary font-medium">{featured.role}</div>
            <p className="mt-6 text-muted-foreground leading-relaxed">{featured.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.specialties.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium">{s}</span>
              ))}
            </div>
            <Button asChild className="mt-8 rounded-full bg-gradient-primary">
              <Link to="/contact">Book an appointment <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visiting specialists */}
      <section className="container-wide py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">Visiting specialists</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance">A full panel of consultants.</h2>
          <p className="mt-4 text-muted-foreground">Visiting consultants across major specialties hold regular OPDs — please call to confirm timings.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiting.map((d) => {
            const Icon = d.icon!;
            return (
              <article key={d.name} className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground"><Icon className="w-7 h-7" /></div>
                <h3 className="mt-5 font-serif text-xl">{d.name}</h3>
                <div className="text-xs text-primary mt-1">{d.role}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.specialties.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[11px] font-medium">{s}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Staff gallery */}
      <section className="container-wide py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow justify-center">Our team</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">The hands behind the healing.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[staff1, staff2].map((s, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-card">
              <img src={s} alt="Hospital staff" className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Doctors;
