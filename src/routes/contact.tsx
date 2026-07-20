import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Navigation, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Dhahabu Suites" },
      { name: "description", content: "Reserve your stay at Dhahabu Suites. Call, WhatsApp or email our reservations team for availability and rates." },
      { property: "og:title", content: "Contact & Reservations — Dhahabu Suites" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Reservations & Enquiries"
        title="We'd love to host you"
        subtitle="Send us a note, call us, or message us on WhatsApp — our team will be in touch shortly."
        image={IMG.bedroomDetail}
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
                { icon: MapPin, label: "Mbezi Beach, Dar es Salaam, Tanzania", href: "https://www.google.com/maps/dir/?api=1&destination=Mbezi+Beach,+Dar+es+Salaam,+Tanzania" },
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
              <a href="https://wa.me/255724972277" target="_blank" rel="noreferrer" className="btn-outline-brown">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Mbezi+Beach,+Dar+es+Salaam,+Tanzania"
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-white p-8 md:p-10 border shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] grid gap-5 md:grid-cols-2"
            >
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
                {sent ? (
                  <p className="text-sm" style={{ color: "var(--gold)" }}>
                    Thank you — we've received your enquiry and will be in touch shortly.
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    We respond to all enquiries within 24 hours.
                  </p>
                )}
                <button type="submit" className="btn-gold btn-gold-hover">
                  Send Enquiry <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-lux">
          <div className="overflow-hidden border">
            <iframe
              title="Dhahabu Suites map"
              src="https://www.google.com/maps?q=Mbezi+Beach,+Dar+es+Salaam,+Tanzania&output=embed"
              className="w-full h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
