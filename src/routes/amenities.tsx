import { createFileRoute } from "@tanstack/react-router";
import {
  Waves, ShieldCheck, Camera, Car, Wifi, Tv, Radio, MonitorPlay,
  ChefHat, Bath, Home as HomeIcon, Sparkles, Snowflake, Briefcase, Users, Lock,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Dhahabu Suites" },
      { name: "description", content: "Swimming pool, 24/7 security, Smart TV, high-speed Wi-Fi, fully equipped kitchens and more at Dhahabu Suites." },
      { property: "og:title", content: "Amenities — Dhahabu Suites" },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: Amenities,
});

const AMENITIES = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Camera, label: "External CCTV Surveillance" },
  { icon: Car, label: "Secure Parking" },
  { icon: Wifi, label: "High-Speed Internet" },
  { icon: Tv, label: "Smart TV" },
  { icon: MonitorPlay, label: "DSTV" },
  { icon: Radio, label: "Azam TV" },
  { icon: ChefHat, label: "Fully Equipped Kitchen" },
  { icon: Bath, label: "Bathtub" },
  { icon: HomeIcon, label: "Outdoor Pergola" },
  { icon: Sparkles, label: "Professional Housekeeping" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Briefcase, label: "Dedicated Workspace" },
  { icon: Users, label: "Family Friendly" },
  { icon: Lock, label: "Private Living Environment" },
];

function Amenities() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Amenities"
        title="Everything you'd expect. Nothing you wouldn't."
        subtitle="A complete residence, quietly serviced — every detail attended to."
        image={IMG.poolExterior}
      />
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white p-8 flex flex-col items-start gap-4 transition-colors hover:bg-[var(--cream)]"
              >
                <Icon size={26} style={{ color: "var(--gold)" }} />
                <h3 className="font-display text-lg">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
