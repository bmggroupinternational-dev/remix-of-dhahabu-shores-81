import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Utensils, ShoppingBag, Waves, Building2, Cross, Bus } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Dhahabu Suites, Mbezi Beach" },
      { name: "description", content: "Find Dhahabu Suites in Mbezi Beach, Dar es Salaam. Close to the coast, restaurants, shopping, business districts and healthcare." },
      { property: "og:title", content: "Location — Dhahabu Suites" },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: Location,
});

const NEARBY = [
  { icon: Waves, title: "Beaches", body: "Minutes to the sands and coastal boardwalks of Mbezi Beach." },
  { icon: Utensils, title: "Restaurants & Cafés", body: "A short drive to some of Dar es Salaam's finest dining." },
  { icon: ShoppingBag, title: "Supermarkets & Shopping", body: "Everyday essentials and shopping centers close at hand." },
  { icon: Building2, title: "Business Districts", body: "Well connected to Masaki, Msasani and the CBD." },
  { icon: Cross, title: "Healthcare Facilities", body: "Trusted hospitals and clinics within easy reach." },
  { icon: Bus, title: "Transport Routes", body: "Direct access to major routes and Julius Nyerere Airport." },
];

function Location() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Location"
        title="Mbezi Beach, Dar es Salaam"
        subtitle="A quiet coastal address moments from the city's business, dining and leisure."
        image={IMG.exterior}
      />

      <section className="py-20 md:py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden border">
            <iframe
              title="Dhahabu Suites location"
              src="https://www.google.com/maps?q=Mbezi+Beach,+Dar+es+Salaam,+Tanzania&output=embed"
              className="w-full h-[420px] md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-5">
            <span className="eyebrow">Address</span>
            <h2 className="font-display text-3xl">Dhahabu Suites</h2>
            <p className="text-muted-foreground flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0" style={{ color: "var(--gold)" }} />
              Mbezi Beach, Dar es Salaam, Tanzania
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Mbezi+Beach,+Dar+es+Salaam,+Tanzania"
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover"
            >
              Get Directions <Navigation size={14} />
            </a>
            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Set in the residential calm of Mbezi Beach, Dhahabu Suites is close enough to be connected and far
                enough to be quiet. Reservations can arrange airport transfers on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Nearby</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Everything within easy reach</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEARBY.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white p-7">
                <Icon size={22} style={{ color: "var(--gold)" }} />
                <h3 className="mt-4 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
