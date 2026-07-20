import { createFileRoute } from "@tanstack/react-router";
import {
  Wifi,
  ShieldCheck,
  Waves,
  Sparkles,
  Users,
  Home as HomeIcon,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dhahabu Suites" },
      {
        name: "description",
        content:
          "Dhahabu Suites is a boutique collection of premium serviced apartments in Mbezi Beach, Dar es Salaam — designed for privacy, comfort, and refined hospitality.",
      },
      { property: "og:title", content: "About — Dhahabu Suites" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const WHY = [
  { icon: Sparkles, title: "Luxury Interiors", body: "Curated finishes, considered light, and materials chosen to age with grace." },
  { icon: HomeIcon, title: "Modern Architecture", body: "Clean lines and generous volumes that let the outside in." },
  { icon: MapPin, title: "Prime Mbezi Beach Location", body: "Minutes from the coast, restaurants and the city's business districts." },
  { icon: HeartHandshake, title: "Professional Hospitality", body: "Attentive, discreet service from arrival to departure." },
  { icon: Wifi, title: "Fast Internet", body: "High-speed Wi-Fi throughout — designed for work as much as rest." },
  { icon: Users, title: "Family-Friendly Environment", body: "Space, safety and quiet for families and long stays." },
  { icon: ShieldCheck, title: "Secure Living", body: "24/7 security, monitored CCTV and secure private parking." },
  { icon: Waves, title: "Spacious Apartments", body: "Full living, dining and workspaces — a home, not a room." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="A different kind of serviced apartment"
        subtitle="Dhahabu Suites was built for guests who expect more than a room — space, privacy, and the calm of a private residence."
        image={IMG.loungeMain}
      />

      <section className="py-24 md:py-32">
        <div className="container-lux grid gap-14 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="eyebrow">About Dhahabu</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Rest. Relax. Recharge.</h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Dhahabu Suites is a boutique collection of two and three bedroom serviced apartments moments from
              Mbezi Beach in Dar es Salaam. Conceived for business travelers, families, tourists, expatriates
              and long-stay guests, each residence brings together generous living spaces, refined interiors and
              modern hospitality.
            </p>
            <p>
              We designed Dhahabu to sit somewhere between the polish of a five-star suite and the intimacy of a
              private home — the ease of housekeeping and 24/7 security, paired with your own kitchen, living
              room and quiet corners to work or unwind.
            </p>
            <p>
              Whether you're staying a night, a season or somewhere in between, our team is here to make Dhahabu
              feel entirely your own.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Why Choose Dhahabu Suites</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Considered in every detail</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
              >
                <Icon size={26} style={{ color: "var(--gold)" }} />
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux grid gap-6 md:grid-cols-3">
          <img src={IMG.exterior} alt="Exterior" className="aspect-[4/5] object-cover" />
          <img src={IMG.bedroomMain} alt="Bedroom" className="aspect-[4/5] object-cover md:mt-12" />
          <img src={IMG.poolExterior} alt="Pool" className="aspect-[4/5] object-cover" />
        </div>
      </section>
    </SiteLayout>
  );
}
