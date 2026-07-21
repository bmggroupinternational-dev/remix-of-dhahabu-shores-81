import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { GALLERY, IMG } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dhahabu Suites" },
      { name: "description", content: "A visual tour of Dhahabu Suites — living rooms, bedrooms, bathrooms, kitchen, swimming pool, exterior and grounds." },
      { property: "og:title", content: "Gallery — Dhahabu Suites" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const CATEGORIES = ["All", "Living Room", "Bedrooms", "Kitchen & Dining", "Bathrooms", "Swimming Pool", "Exterior"];

function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? null : (v + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? null : (v - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Moments from Dhahabu Suites"
        subtitle="A closer look at the spaces, light and details of our residences."
        image={IMG.livingRoom}
      />

      <section className="py-16 md:py-24">
        <div className="container-lux">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-[0.7rem] tracking-[0.2em] uppercase border transition-all ${
                  filter === c ? "text-white" : "hover:text-[var(--gold)]"
                }`}
                style={{
                  background: filter === c ? "var(--brown)" : "transparent",
                  borderColor: filter === c ? "var(--brown)" : "rgba(0,0,0,0.1)",
                  color: filter === c ? "#fff" : "var(--brown)",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {items.map((g, idx) => (
              <button
                key={g.src + idx}
                onClick={() => setOpen(idx)}
                className="mb-4 block w-full overflow-hidden break-inside-avoid"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => setOpen((v) => (v === null ? null : (v - 1 + items.length) % items.length))}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <img src={items[open].src} alt={items[open].alt} className="max-h-[85vh] max-w-[90vw] object-contain" />
          <button
            onClick={() => setOpen((v) => (v === null ? null : (v + 1) % items.length))}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-xs tracking-[0.25em] uppercase">
            {items[open].category}
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
