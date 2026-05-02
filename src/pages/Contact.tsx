import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Ambulance, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import { CONTACT } from "@/data/hospital";
const reception = "https://backup.kutehospital.com/wp-content/uploads/2024/02/im-1536x864.jpg"; // Hospital exterior for contact page

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255).or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email") ?? "",
      message: form.get("message"),
    });
    if (!result.success) {
      toast({ title: "Please check the form", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Thank you!", description: "We've received your message and will be in touch shortly." });
    }, 700);
  };

  return (
    <>
      <SEO
        canonical="/contact"
        title="Contact Kute Hospital Sangamner — Appointments, Helpline & Ambulance"
        description="Contact Kute Hospital Sangamner. Book an appointment, call our 24×7 helpline (+91 88888 82225) or ambulance (+91 88883 72225). OPD Mon–Sat 9 AM–8 PM. Emergency always open."
        image="https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9643-1024x683.jpg"
      />
      <PageHero
        eyebrow="Contact"
        title={<>Reach out — we're <em className="italic text-primary">here for you.</em></>}
        subtitle="Book an appointment, ask a question, or call our 24×7 helpline. We respond to every enquiry."
        image={reception}
      />

      <section className="container-wide py-12 grid lg:grid-cols-12 gap-10">
        {/* Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card">
            <h2 className="font-serif text-3xl">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within a few hours during working hours.</p>

            <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required maxLength={100} placeholder="Your full name" className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required maxLength={20} placeholder="+91 9xxxxxxxxx" className="rounded-xl h-12" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input id="email" name="email" type="email" maxLength={255} placeholder="you@example.com" className="rounded-xl h-12" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" name="message" required maxLength={1000} rows={5} placeholder="Briefly describe your enquiry…" className="rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" disabled={submitting} size="lg" className="rounded-full bg-gradient-primary h-12 px-7">
                  <Send className="w-4 h-4" /> {submitting ? "Sending…" : "Send message"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 space-y-5">
          {[
            { icon: Phone, title: "Enquiry & Helpline", lines: [`Enquiry: ${CONTACT.enquiry}`, `Helpline: ${CONTACT.helpline}`], href: `tel:${CONTACT.enquiry}` },
            { icon: Ambulance, title: "Ambulance · 24×7", lines: [CONTACT.ambulance], href: `tel:${CONTACT.ambulance}`, accent: true },
            { icon: Mail, title: "Email", lines: [CONTACT.email], href: `mailto:${CONTACT.email}` },
            { icon: MapPin, title: "Location", lines: [CONTACT.address] },
            { icon: Clock, title: "Hours", lines: ["OPD · Mon–Sat · 9 AM – 8 PM", "Emergency · 24×7"] },
          ].map(({ icon: Icon, title, lines, href, accent }) => {
            const inner = (
              <div className={`flex gap-4 p-6 rounded-2xl border ${accent ? "bg-accent text-accent-foreground border-transparent" : "bg-card border-border/60"} shadow-soft`}>
                <div className={`grid place-items-center w-11 h-11 shrink-0 rounded-xl ${accent ? "bg-accent-foreground/15" : "bg-primary-soft text-primary"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] opacity-70">{title}</div>
                  {lines.map((l) => <div key={l} className="text-sm font-medium mt-1">{l}</div>)}
                </div>
              </div>
            );
            return href ? <a key={title} href={href} className="block hover:-translate-y-0.5 transition-transform">{inner}</a> : <div key={title}>{inner}</div>;
          })}
        </div>
      </section>

      {/* Map */}
      <section className="container-wide py-16">
        <div className="rounded-3xl overflow-hidden border border-border/60 shadow-card">
          <iframe
            title="Kute Hospital location"
            src="https://www.google.com/maps?q=Sangamner,Maharashtra&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Ambulance banner */}
      <section className="container-wide py-12">
        <div className="rounded-[2rem] bg-gradient-accent text-accent-foreground p-10 md:p-12 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-5">
            <div className="grid place-items-center w-14 h-14 rounded-2xl bg-accent-foreground/15"><Ambulance className="w-7 h-7" /></div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] opacity-80">Ambulance · 24×7</div>
              <div className="font-serif text-2xl md:text-3xl mt-1">In an emergency, every second counts.</div>
            </div>
          </div>
          <Button asChild size="lg" className="rounded-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 h-12 px-7">
            <a href={`tel:${CONTACT.ambulance}`}><Phone className="w-4 h-4" /> Call {CONTACT.ambulance}</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
