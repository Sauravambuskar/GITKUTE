import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ eyebrow, title, subtitle, image }: Props) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      {image && (
        <div className="absolute inset-0 opacity-20">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
      )}
      <div className="relative container-wide py-24 md:py-32 text-center">
        {eyebrow && <div className="eyebrow justify-center animate-fade-up">{eyebrow}</div>}
        <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] text-balance animate-fade-up" style={{ animationDelay: "60ms" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty animate-fade-up" style={{ animationDelay: "120ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
