import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import { STATS, VALUES } from "@/data/hospital";
import drKute from "@/assets/hospital/dr-kute.jpg";
const reception = "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9901-1024x683.jpg";
const care = "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9726-768x512.jpg";

const About = () => {
  return (
    <>
      <SEO
        canonical="/about"
        title="About Kute Hospital — Our Story, Values & Dr. Pradeep Kute"
        description="Founded by Dr. Pradeep Kute (MS General Surgery), Kute Hospital has served Sangamner since 2010 with compassionate, modern multi-specialty healthcare. Learn about our team and values."
        image="https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9901-1024x683.jpg"
      />
      <PageHero
        eyebrow="Our story"
        title={<>Care that started with a <em className="italic text-primary">single promise.</em></>}
        subtitle="From a small clinic to a trusted multi-specialty hospital — Kute Hospital was built on the belief that no family should travel far for compassionate, modern healthcare."
        image={reception}
      />

      {/* Story */}
      <section className="container-narrow py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <img src={drKute} alt="Dr. Pradeep Kute" className="rounded-3xl aspect-[4/5] object-cover object-right shadow-card" loading="lazy" />
          </div>
          <div className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <div className="eyebrow text-primary">A founder's note</div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
              "We don't treat cases. We care for people."
            </h2>
            <p>
              When I started practising in Sangamner two decades ago, I saw families travel hours to bigger cities for care that should have been available right here. Kute Hospital is my answer to that — a place where modern medicine meets the warmth of a neighbour you trust.
            </p>
            <p>
              Today, our team of doctors, nurses, technicians and support staff share that single promise: to give every patient the kind of care we'd want for our own family.
            </p>
            <p className="font-serif italic text-foreground">— Dr. Pradeep Kute, Founder</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-wide py-16">
        <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl md:text-5xl text-primary-glow">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-wide py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">What guides us</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-medium text-balance">Our core values.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="p-7 rounded-3xl bg-card border border-border/60 shadow-soft">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary-soft text-primary"><Icon className="w-6 h-6" /></div>
                <h3 className="mt-5 font-serif text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image grid */}
      <section className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[reception, care, drKute].map((src, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-soft">
              <img src={src} alt="" className={`w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ${src === drKute ? 'object-right' : ''}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-balance max-w-2xl mx-auto">Want to meet the team behind the care?</h2>
        <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-primary h-12 px-7">
          <Link to="/doctors">Meet our doctors <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </section>
    </>
  );
};

export default About;
