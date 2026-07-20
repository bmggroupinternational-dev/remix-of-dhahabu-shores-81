import { type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function SiteLayout({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  return (
    <>
      <Nav transparentOnTop={transparentNav} />
      <main className={transparentNav ? "" : "pt-20 md:pt-24"}>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover ken-burns" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 h-full container-lux flex flex-col justify-end pb-16 text-white">
        {eyebrow && <span className="eyebrow !text-[var(--gold)] mb-3 fade-up">{eyebrow}</span>}
        <h1 className="!text-white font-display text-4xl md:text-6xl max-w-3xl fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg fade-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
