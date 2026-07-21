import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BedDouble, Bath, Users, ChefHat, Wifi, Tv, Snowflake, Sparkles, Briefcase, Waves, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/apartments/2-bedroom")({
  head: () => ({
    meta: [
      { title: "2 Bedroom Apartment — Dhahabu Suites" },
      {
        name: "description",
        content:
          "A refined two bedroom serviced apartment in Mbezi Beach — sleeps up to 4, with full living, dining, kitchen and workspace.",
      },
      { property: "og:title", content: "2 Bedroom Apartment — Dhahabu Suites" },
      { property: "og:url", content: "/apartments/2-bedroom" },
    ],
    links: [{ rel: "canonical", href: "/apartments/2-bedroom" }],
  }),
  component: () => (
    <ApartmentDetail
      title="Two Bedroom Apartment"
      subtitle="A refined residence for couples, small families and business travelers seeking privacy and space."
      guests={4}
      beds={2}
      baths={2}
      gallery={[IMG.bedroomMain, IMG.livingRoom, IMG.kitchen, IMG.bedroomLinen, IMG.bathroomMain, IMG.dining]}
      description={[
        "Our two bedroom apartments have been designed to feel effortlessly liveable. Generous living and dining spaces open onto a fully equipped kitchen, with two private bedrooms and two bathrooms that carry the same considered detail.",
        "Perfect for a weekend, a week or a season — with everything you'd expect from a private residence, quietly kept for you.",
      ]}
    />
  ),
});

function ApartmentDetail({
  title,
  subtitle,
  guests,
  beds,
  baths,
  gallery,
  description,
}: {
  title: string;
  subtitle: string;
  guests: number;
  beds: number;
  baths: number;
  gallery: string[];
  description: string[];
}) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + gallery.length) % gallery.length);
  const next = () => setI((v) => (v + 1) % gallery.length);

  const features = [
    { icon: ChefHat, label: "Fully Equipped Kitchen" },
    { icon: Briefcase, label: "Dedicated Workspace" },
    { icon: Tv, label: "Smart TV & DSTV" },
    { icon: Wifi, label: "High-Speed Wi-Fi" },
    { icon: Snowflake, label: "Air Conditioning" },
    { icon: Sparkles, label: "Daily Housekeeping" },
    { icon: Waves, label: "Swimming Pool Access" },
    { icon: Users, label: "Family Friendly" },
  ];

  return (
    <SiteLayout>
      {/* HERO GALLERY */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden mt-[-6rem]">
        {gallery.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full container-lux flex flex-col justify-end pb-16 text-white">
          <span className="eyebrow mb-3">Signature Residence</span>
          <h1 className="!text-white font-display text-4xl md:text-6xl max-w-3xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-white/85">{subtitle}</p>
        </div>
        <div className="absolute inset-y-0 left-4 flex items-center">
          <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition">
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-lux grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <span className="eyebrow">The Residence</span>
            <h2 className="font-display text-3xl md:text-4xl">A private home, quietly kept.</h2>
            {description.map((p, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-8 py-6 border-y" style={{ color: "var(--brown)" }}>
              <span className="flex items-center gap-2"><Users size={18} style={{ color: "var(--gold)" }} />Up to {guests} guests</span>
              <span className="flex items-center gap-2"><BedDouble size={18} style={{ color: "var(--gold)" }} />{beds} bedrooms</span>
              <span className="flex items-center gap-2"><Bath size={18} style={{ color: "var(--gold)" }} />{baths} bathrooms</span>
            </div>

            <h3 className="font-display text-2xl mt-12">In this residence</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 border">
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                  <span className="text-sm" style={{ color: "var(--brown)" }}>{label}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl mt-12">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((src, idx) => (
                <button key={src} onClick={() => setI(idx)} className="overflow-hidden">
                  <img src={src} alt="" className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-700" />
                </button>
              ))}
            </div>
          </div>

          {/* Sticky reservation */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 border p-8 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">
              <span className="eyebrow">Reserve</span>
              <h3 className="mt-3 font-display text-2xl">Book your stay</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Speak to reservations for availability, seasonal rates and long-stay arrangements.
              </p>
              <Link to="/reach-us" className="btn-gold btn-gold-hover w-full mt-6">Book Now</Link>
              <a href="tel:+255724972277" className="btn-outline-brown w-full mt-3">Call +255 724 972 277</a>
              <a
                href="https://wa.me/255724972277"
                className="block text-center mt-4 text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Message on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

export { ApartmentDetail };
