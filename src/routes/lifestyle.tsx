import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/lifestyle")({
  head: () => ({
    meta: [
      { title: "Lifestyle — Dhahabu Suites" },
      { name: "description", content: "Business travel, family vacations, long stays and holiday retreats at Dhahabu Suites." },
      { property: "og:title", content: "Lifestyle — Dhahabu Suites" },
      { property: "og:url", content: "/lifestyle" },
    ],
    links: [{ rel: "canonical", href: "/lifestyle" }],
  }),
  component: Lifestyle,
});

const CARDS = [
  { title: "Business Travel", img: IMG.bedroomMain, body: "High-speed internet, dedicated workspaces and quiet residences that keep the working week in flow." },
  { title: "Family Vacations", img: IMG.poolExterior, body: "Spacious layouts, a swimming pool and a secure environment — designed for families to unwind together." },
  { title: "Long Stay Accommodation", img: IMG.livingRoom, body: "Full kitchens, housekeeping and privacy — everything a longer stay in Dar es Salaam should feel like." },
  { title: "Holiday Retreats", img: IMG.loungeMain, body: "A quiet refuge for holidays — refined, private and cared for from the moment you arrive." },
];

function Lifestyle() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Lifestyle"
        title="A residence for every reason to stay"
        subtitle="From short escapes to extended assignments — Dhahabu Suites is designed to fit the way you live."
        image={IMG.bedroomSecondary}
      />

      <section className="py-20 md:py-28">
        <div className="container-lux grid gap-8 md:grid-cols-2">
          {CARDS.map((c) => (
            <article key={c.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <span className="divider-gold" />
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
