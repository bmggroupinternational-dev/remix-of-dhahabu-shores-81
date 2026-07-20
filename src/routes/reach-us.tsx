import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Send,
  Utensils,
  ShoppingBag,
  Waves,
  Building2,
  Cross,
  Bus,
  ChevronDown,
  ChevronUp,
  X,
  Check,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reach-us")({
  head: () => ({
    meta: [
      { title: "Reach Us — Dhahabu Suites" },
      { name: "description", content: "Get in touch and find Dhahabu Suites in Mbezi Beach, Dar es Salaam. Call, WhatsApp, email or send a reservation enquiry." },
      { property: "og:title", content: "Reach Us — Dhahabu Suites" },
      { property: "og:description", content: "Contact and directions for Dhahabu Suites in Mbezi Beach, Dar es Salaam." },
      { property: "og:url", content: "/reach-us" },
    ],
    links: [{ rel: "canonical", href: "/reach-us" }],
  }),
  component: ReachUs,
});

const NEARBY = [
  { icon: Waves, title: "Beaches", body: "Minutes to the sands and coastal boardwalks of Mbezi Beach." },
  { icon: Utensils, title: "Restaurants & Cafés", body: "A short drive to some of Dar es Salaam's finest dining." },
  { icon: ShoppingBag, title: "Supermarkets & Shopping", body: "Everyday essentials and shopping centers close at hand." },
  { icon: Building2, title: "Business Districts", body: "Well connected to Masaki, Msasani and the CBD." },
  { icon: Cross, title: "Healthcare Facilities", body: "Trusted hospitals and clinics within easy reach." },
  { icon: Bus, title: "Transport Routes", body: "Direct access to major routes and Julius Nyerere Airport." },
];

function ReachUs() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact & Directions"
        title="Reach Us"
        subtitle="Send a reservation enquiry, call or message us — and find us in Mbezi Beach, Dar es Salaam."
        image={IMG.exterior}
      />

      <section className="py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Dhahabu Suites</h2>
            </div>
            <ul className="space-y-5">
              {[
                { icon: MapPin, label: "Mbezi Beach, Dar es Salaam, Tanzania", href: "https://www.google.com/maps/dir/?api=1&destination=Dhahabu+Suites,+Mbezi+Beach,+Dar+es+Salaam" },
                { icon: Phone, label: "+255 724 972 277", href: "tel:+255724972277" },
                { icon: Mail, label: "dhahabusuitesdar@gmail.com", href: "mailto:dhahabusuitesdar@gmail.com" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex gap-4 items-start group">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "var(--cream)", color: "var(--gold)" }}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="text-sm pt-2.5 group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--brown)" }}>
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="tel:+255724972277" className="btn-outline-brown">
                <Phone size={14} /> Call
              </a>
              <a href="https://wa.me/255724972277?text=Hello%20Dhahabu%20Suites,%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noreferrer" className="btn-outline-brown">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Dhahabu+Suites,+Mbezi+Beach,+Dar+es+Salaam"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-brown"
              >
                <Navigation size={14} /> Directions
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] overflow-hidden">
              {/* Collapsed header */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className={cn(
                  "w-full flex items-center justify-between p-8 md:p-10 text-left transition-colors hover:bg-[var(--cream)]",
                  open && "hidden"
                )}
              >
                <div>
                  <span className="eyebrow">Enquiry</span>
                  {sent ? (
                    <div className="mt-3 space-y-2">
                      <p className="font-display text-xl md:text-2xl flex items-center gap-2" style={{ color: "var(--gold)" }}>
                        <Check size={22} /> Enquiry received
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We'll be in touch shortly. Click here to send another enquiry.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 space-y-1">
                      <h3 className="font-display text-2xl md:text-3xl">Send an enquiry</h3>
                      <p className="text-sm text-muted-foreground">Fill in your details and we'll respond within 24 hours.</p>
                    </div>
                  )}
                </div>
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--cream)", color: "var(--gold)" }}
                >
                  <ChevronDown size={20} />
                </span>
              </button>

              {/* Expanded form */}
              <div
                className={cn(
                  "grid transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <form
                    ref={formRef}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                      setOpen(false);
                    }}
                    className="p-8 md:p-10 grid gap-5 md:grid-cols-2"
                  >
                    <div className="md:col-span-2 flex items-start justify-between gap-4">
                      <div>
                        <span className="eyebrow">Enquiry</span>
                        <h3 className="mt-1 font-display text-2xl md:text-3xl">Send an enquiry</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors hover:bg-[var(--cream)]"
                        style={{ color: "var(--brown)" }}
                        aria-label="Close enquiry form"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <Field label="Full Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Apartment" name="apt" as="select">
                      <option>2 Bedroom Apartment</option>
                      <option>3 Bedroom Apartment</option>
                      <option>Not sure yet</option>
                    </Field>
                    <Field label="Check-in" name="in" type="date" />
                    <Field label="Check-out" name="out" type="date" />
                    <div className="md:col-span-2">
                      <Field label="Message" name="message" as="textarea" />
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                      <p className="text-xs text-muted-foreground">
                        We respond to all enquiries within 24 hours.
                      </p>
                      <button type="submit" className="btn-gold btn-gold-hover">
                        Send Enquiry <Send size={14} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Address */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div className="container-lux grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden border">
            <iframe
              title="Dhahabu Suites location"
              src="https://www.google.com/maps?q=Dhahabu+Suites,+Mbezi+Beach,+Dar+es+Salaam&output=embed"
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
              href="https://www.google.com/maps/dir/?api=1&destination=Dhahabu+Suites,+Mbezi+Beach,+Dar+es+Salaam"
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

      {/* Nearby */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Nearby</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Everything within easy reach</h2>
          </div>
        </div>
        <div className="mt-12 relative">
          <div className="marquee-track marquee-track-pause gap-6">
            {[...NEARBY, ...NEARBY, ...NEARBY, ...NEARBY].map(({ icon: Icon, title, body }, index) => (
              <div
                key={`${title}-${index}`}
                className="bg-[var(--cream)] p-7 w-[280px] md:w-[320px] shrink-0"
              >
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

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "select" | "textarea";
  children?: React.ReactNode;
}) {
  const cls =
    "w-full border-b border-black/15 py-2.5 text-sm outline-none focus:border-[var(--gold)] transition-colors bg-transparent";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: "var(--brown)" }}>
        {label}
        {required && <span style={{ color: "var(--gold)" }}> *</span>}
      </span>
      {as === "select" ? (
        <select name={name} className={cls}>
          {children}
        </select>
      ) : as === "textarea" ? (
        <textarea name={name} rows={4} className={cls + " resize-none"} />
      ) : (
        <input type={type} name={name} required={required} className={cls} />
      )}
    </label>
  );
}
