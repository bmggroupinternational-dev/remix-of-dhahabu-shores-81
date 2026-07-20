import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Wifi,
  ShieldCheck,
  Waves,
  Sparkles,
  Users,
  Home as HomeIcon,
  MapPin,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhahabu Suites — Luxury Living by Mbezi Beach" },
      {
        name: "description",
        content:
          "Premium serviced apartments in Mbezi Beach, Dar es Salaam. Rest, relax, recharge in spacious 2 and 3 bedroom residences.",
      },
      { property: "og:title", content: "Dhahabu Suites — Luxury Living by Mbezi Beach" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HERO_IMAGES = [IMG.loungeMain, IMG.poolExterior, IMG.bedroomMain, IMG.exterior, IMG.bathroomMain];

const HIGHLIGHTS = [
  { icon: Sparkles, label: "Luxury Interiors" },
  { icon: HomeIcon, label: "Spacious Apartments" },
  { icon: MapPin, label: "Prime Mbezi Beach Location" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Wifi, label: "High-Speed Internet" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Users, label: "Family Friendly" },
  { icon: Sparkles, label: "Private Living" },
];

const TESTIMONIALS = [
  {
    name: "Amina R.",
    role: "Business Traveler",
    quote:
      "Impeccable service and the most beautifully appointed apartment I've stayed in across East Africa. I'll be back every trip to Dar.",
  },
  {
    name: "James & Clara",
    role: "Family Vacation",
    quote:
      "Space, privacy and thoughtful design. The children loved the pool and we loved coming home to somewhere this calm each evening.",
  },
  {
    name: "Daniel M.",
    role: "Long-Stay Guest",
    quote:
      "Feels like a private residence, not a rental. The finishes, the housekeeping, the location by Mbezi Beach — genuinely five-star.",
  },
];

function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout transparentNav>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${
              i === idx ? "opacity-100 ken-burns" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

        <div className="relative z-10 h-full container-lux flex flex-col justify-center items-start text-white pt-24">
          <span className="eyebrow mb-5 fade-up">Dhahabu Suites · Dar es Salaam</span>
          <h1 className="!text-white font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl fade-up">
            Luxury Living <br className="hidden md:block" /> by Mbezi Beach
          </h1>
          <p className="mt-6 max-w-xl text-white/85 text-base md:text-lg fade-up">
            Experience premium serviced apartments designed for comfort, elegance, and privacy in Dar es Salaam.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 fade-up">
            <Link to="/contact" className="btn-gold btn-gold-hover">
              Book Your Stay
            </Link>
            <Link to="/apartments" className="btn-outline-light">
              Explore Apartments
            </Link>
          </div>
        </div>

        <a
          href="#booking"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
          aria-label="Scroll"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* BOOKING WIDGET */}
      <section id="booking" className="relative -mt-16 md:-mt-20 z-20">
        <div className="container-lux">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}
            className="bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] rounded-sm p-6 md:p-8 grid gap-4 md:grid-cols-5"
          >
            {[
              { label: "Check-in", type: "date", name: "checkin" },
              { label: "Check-out", type: "date", name: "checkout" },
            ].map((f) => (
              <label key={f.name} className="flex flex-col gap-1.5">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: "var(--brown)" }}>
                  {f.label}
                </span>
                <input
                  type={f.type}
                  name={f.name}
                  className="border-b border-black/15 py-2 text-sm outline-none focus:border-[var(--gold)] transition-colors bg-transparent"
                />
              </label>
            ))}
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: "var(--brown)" }}>
                Guests
              </span>
              <select className="border-b border-black/15 py-2 text-sm outline-none focus:border-[var(--gold)] bg-transparent">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: "var(--brown)" }}>
                Apartment
              </span>
              <select className="border-b border-black/15 py-2 text-sm outline-none focus:border-[var(--gold)] bg-transparent">
                <option>2 Bedroom Apartment</option>
                <option>3 Bedroom Apartment</option>
              </select>
            </label>
            <button type="submit" className="btn-gold btn-gold-hover self-end">
              Book Now
            </button>
          </form>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-lux grid gap-12 md:grid-cols-2 md:gap-20 items-center">
          <div>
            <span className="eyebrow">Welcome</span>
            <span className="divider-gold" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A private residence, quietly perfected.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dhahabu Suites is a boutique collection of two and three bedroom serviced apartments moments from
              Mbezi Beach. Every residence has been thoughtfully composed — refined interiors, considered light,
              and the calm of a home you were always meant to keep.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For business, for family, for the long stay — arrive to space, privacy and the quiet confidence of
              genuine hospitality.
            </p>
            <Link to="/about" className="btn-outline-brown mt-8">
              Our Story <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.livingRoom} alt="Living room" className="aspect-[3/4] w-full object-cover rounded-sm" />
            <img
              src={IMG.bedroomDetail}
              alt="Bedroom detail"
              className="aspect-[3/4] w-full object-cover rounded-sm mt-10"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-28" style={{ background: "var(--cream)" }}>
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Why Dhahabu Suites</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Considered in every detail</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
              >
                <Icon size={26} style={{ color: "var(--gold)" }} className="mx-auto" />
                <h3 className="mt-5 font-display text-xl">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APARTMENTS PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="eyebrow">The Residences</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Two & three bedroom apartments</h2>
            </div>
            <Link to="/apartments" className="text-xs tracking-[0.25em] uppercase self-start md:self-end" style={{ color: "var(--gold)" }}>
              View All →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "2 Bedroom Apartment", to: "/apartments/2-bedroom", img: IMG.bedroomMain, sub: "Sleeps up to 4 · 2 baths · Living, dining, kitchen" },
              { title: "3 Bedroom Apartment", to: "/apartments/3-bedroom", img: IMG.loungeMain, sub: "Sleeps up to 6 · 3 baths · Extended living areas" },
            ].map((a) => (
              <Link key={a.to} to={a.to} className="group block">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{a.sub}</p>
                  </div>
                  <span className="text-xs tracking-[0.25em] uppercase whitespace-nowrap mt-2" style={{ color: "var(--gold)" }}>
                    Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container-lux text-center">
          <span className="eyebrow">Guest Reflections</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Kind words from our residents</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-white p-8 text-left">
                <div className="flex gap-1 mb-4" style={{ color: "var(--gold)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-serif text-lg leading-relaxed" style={{ color: "var(--brown)" }}>
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium" style={{ color: "var(--brown)" }}>{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <img src={IMG.poolExterior} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative container-lux text-center text-white">
          <span className="eyebrow">Reserve Your Residence</span>
          <h2 className="!text-white mt-4 font-display text-4xl md:text-6xl max-w-3xl mx-auto">
            Your space. Your peace. Your place.
          </h2>
          <p className="mt-5 text-white/85 max-w-xl mx-auto">
            Speak to our reservations team for availability, rates and long-stay arrangements.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold btn-gold-hover">Book Your Stay</Link>
            <a href="tel:+255724972277" className="btn-outline-light">Call +255 724 972 277</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
