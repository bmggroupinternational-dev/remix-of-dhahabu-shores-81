import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/brand/dhahabu-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ background: "var(--cream)" }}>
      <div className="container-lux py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo.url} alt="Dhahabu Suites" className="h-16 w-auto object-contain -ml-2" />

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs">
            Luxury serviced apartments in Mbezi Beach, Dar es Salaam — designed for comfort, elegance, and privacy.
          </p>
        </div>

        <div>
          <h5 className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "var(--brown)" }}>
            Explore
          </h5>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              ["About", "/about"],
              ["Apartments", "/apartments"],
              ["Gallery", "/gallery"],
              ["Reach Us", "/reach-us"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="hover:text-[var(--gold)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "var(--brown)" }}>
            Contact
          </h5>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
              Mbezi Beach, Dar es Salaam, Tanzania
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
              <a href="tel:+255724972277" className="hover:text-[var(--gold)] transition-colors">
                +255 724 972 277
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
              <a
                href="mailto:dhahabusuitesdar@gmail.com"
                className="hover:text-[var(--gold)] transition-colors break-all"
              >
                dhahabusuitesdar@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "var(--brown)" }}>
            Newsletter
          </h5>
          <p className="text-sm text-muted-foreground mb-4">
            Receive news and exclusive offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border rounded-sm overflow-hidden"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-3 py-2.5 text-sm bg-white outline-none"
            />
            <button
              type="submit"
              className="px-4 text-xs tracking-[0.15em] uppercase text-white"
              style={{ background: "var(--brown)" }}
            >
              Join
            </button>
          </form>
          <div className="flex gap-4 mt-6" style={{ color: "var(--brown)" }}>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--gold)] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--gold)] transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container-lux py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Dhahabu Suites. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--gold)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--gold)]">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
