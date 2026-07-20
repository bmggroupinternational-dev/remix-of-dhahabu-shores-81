import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Bath, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/apartments")({
  head: () => ({
    meta: [
      { title: "Apartments — Dhahabu Suites" },
      {
        name: "description",
        content:
          "Explore Dhahabu Suites' 2 and 3 bedroom luxury serviced apartments in Mbezi Beach, Dar es Salaam — spacious, refined, fully equipped residences.",
      },
      { property: "og:title", content: "Apartments — Dhahabu Suites" },
      { property: "og:url", content: "/apartments" },
    ],
    links: [{ rel: "canonical", href: "/apartments" }],
  }),
  component: Apartments,
});

const RESIDENCES = [
  {
    to: "/apartments/2-bedroom" as const,
    title: "Two Bedroom Apartment",
    image: IMG.bedroomMain,
    description:
      "Elegant and generous, perfect for couples, small families or professionals seeking privacy and space.",
    guests: "Up to 4 guests",
    beds: "2 bedrooms",
    baths: "2 bathrooms",
    highlights: ["Full living & dining", "Equipped kitchen", "Dedicated workspace"],
  },
  {
    to: "/apartments/3-bedroom" as const,
    title: "Three Bedroom Apartment",
    image: IMG.loungeMain,
    description:
      "Our most expansive residence — designed for families, groups and extended stays that demand true room to live.",
    guests: "Up to 6 guests",
    beds: "3 bedrooms",
    baths: "3 bathrooms",
    highlights: ["Extended living areas", "Family dining", "Multiple lounges"],
  },
];

function Apartments() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Residences"
        title="Two collections. One standard of living."
        subtitle="Choose the residence that fits the stay — every apartment is fully appointed and privately kept."
        image={IMG.bedroomMain}
      />

      <section className="py-24 md:py-32">
        <div className="container-lux space-y-16">
          {RESIDENCES.map((r, i) => (
            <article
              key={r.to}
              className={`grid gap-10 md:grid-cols-2 md:gap-16 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Link to={r.to} className="block overflow-hidden group">
                <img
                  src={r.image}
                  alt={r.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />
              </Link>
              <div>
                <span className="eyebrow">Signature Residence</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{r.title}</h2>
                <span className="divider-gold" />
                <p className="text-muted-foreground leading-relaxed">{r.description}</p>
                <div className="mt-6 flex flex-wrap gap-6 text-sm" style={{ color: "var(--brown)" }}>
                  <span className="flex items-center gap-2"><Users size={16} style={{ color: "var(--gold)" }} />{r.guests}</span>
                  <span className="flex items-center gap-2"><BedDouble size={16} style={{ color: "var(--gold)" }} />{r.beds}</span>
                  <span className="flex items-center gap-2"><Bath size={16} style={{ color: "var(--gold)" }} />{r.baths}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="w-1 h-1 rounded-full mt-2" style={{ background: "var(--gold)" }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to={r.to} className="btn-outline-brown mt-8">
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
