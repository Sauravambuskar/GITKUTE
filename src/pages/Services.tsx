import { Link } from "react-router-dom";
import { ArrowRight, Check, BedDouble, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import { SERVICES, INSURANCE, OTHER_SERVICES, INFRASTRUCTURE } from "@/data/hospital";
import surgeryHero from "@/assets/hospital/gallery/surgery-team-lights.jpg";

const Services = () => (
  <>
    <SEO
      canonical="/services"
      title="Departments & Facilities | Kute Hospital Sangamner"
      description="Explore Kute Hospital's nine departments, 24×7 emergency and pharmacy, ICU facilities, patient rooms, cashless support and government health schemes."
      image={surgeryHero}
    />
    <PageHero
      eyebrow="Departments & facilities"
      title={<>Complete care, <em className="italic text-primary">close to home.</em></>}
      subtitle="Nine specialist departments, three dedicated ICUs, 24×7 support services and comfortable inpatient facilities—all coordinated under one roof."
      image={surgeryHero}
    />

    <section className="container-wide py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="max-w-2xl">
          <div className="eyebrow">Clinical departments</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-serif text-balance">Specialist care for every stage of treatment.</h2>
        </div>
        <span className="text-sm text-muted-foreground">9 core departments</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link key={service.slug} to={`/services/${service.slug}`} className="group rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative h-40 overflow-hidden bg-muted">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-semibold text-white/80">{String(index + 1).padStart(2, "0")}</div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md text-white grid place-items-center"><Icon className="w-5 h-5" /></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif leading-tight">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{service.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">View facilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>

    <section className="container-wide py-20">
      <div className="max-w-2xl">
        <div className="eyebrow">Beyond consultation</div>
        <h2 className="mt-3 text-3xl md:text-5xl font-serif text-balance">Support at every step of your visit.</h2>
        <p className="mt-4 text-muted-foreground">From arrival and admission to medicines and insurance paperwork, our support teams help make care simpler.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {OTHER_SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="group p-7 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent grid place-items-center group-hover:bg-accent group-hover:text-white transition-colors"><Icon className="w-6 h-6" /></div>
              <h3 className="mt-5 text-xl font-serif">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.body}</p>
            </article>
          );
        })}
      </div>
    </section>

    <section className="container-wide py-20">
      <div className="rounded-[2.5rem] bg-primary text-primary-foreground overflow-hidden shadow-elegant">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 p-9 md:p-14 bg-[#132A4C]">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent"><Building2 className="w-4 h-4" /> Infrastructure</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif">Built for critical care and comfortable recovery.</h2>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">Our 50-bed hospital combines dedicated intensive care units with accommodation choices for different patient needs.</p>
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10"><BedDouble className="w-6 h-6 text-accent" /><span><strong className="text-xl">50</strong> beds</span></div>
          </div>
          <div className="lg:col-span-7 p-9 md:p-14 grid sm:grid-cols-2 gap-3">
            {INFRASTRUCTURE.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="w-8 h-8 rounded-full bg-accent/20 text-accent grid place-items-center shrink-0"><Check className="w-4 h-4" /></span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="container-wide py-20">
      <div className="rounded-[2rem] bg-gradient-soft border border-border/60 p-10 md:p-14">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">Schemes, cashless & mediclaim</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">Financial support with clearer guidance.</h2>
          <p className="mt-4 text-muted-foreground">Our dedicated desk assists eligible patients with scheme guidance, cashless approvals and mediclaim documentation.</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INSURANCE.map((item) => <span key={item} className="px-5 py-2.5 rounded-full bg-card border border-border/60 text-sm font-medium shadow-soft">{item}</span>)}
        </div>
      </div>
    </section>

    <section className="container-wide py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-balance max-w-2xl mx-auto">Need help choosing the right department?</h2>
      <p className="mt-3 text-muted-foreground">Share your concern and our front desk will guide you.</p>
      <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-primary h-12 px-7"><Link to="/contact">Contact the hospital <ArrowRight className="w-4 h-4" /></Link></Button>
    </section>
  </>
);

export default Services;
