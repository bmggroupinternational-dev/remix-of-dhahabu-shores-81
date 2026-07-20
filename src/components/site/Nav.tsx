import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/apartments", label: "Apartments" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/lifestyle", label: "Lifestyle" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparentOnTop || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className="font-display text-2xl md:text-[1.7rem] tracking-wide"
            style={{ color: solid ? "var(--brown)" : "#fff" }}
          >
            Dhahabu
          </span>
          <span
            className="text-[0.6rem] tracking-[0.45em] uppercase mt-0.5"
            style={{ color: "var(--gold)" }}
          >
            Suites
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:!text-[var(--gold)]"
              style={{ color: solid ? "var(--brown)" : "rgba(255,255,255,0.9)" }}
              activeProps={{ style: { color: "var(--gold)" } }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-gold btn-gold-hover">
          Book Now
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Open menu"
          style={{ color: solid ? "var(--brown)" : "#fff" }}
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="container-lux flex items-center justify-between py-5">
            <span className="font-display text-2xl" style={{ color: "var(--brown)" }}>
              Dhahabu <span style={{ color: "var(--gold)" }}>Suites</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ color: "var(--brown)" }}>
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl"
                style={{ color: "var(--brown)" }}
                activeProps={{ style: { color: "var(--gold)" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold btn-gold-hover mt-6">
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
