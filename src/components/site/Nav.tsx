import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand/dhahabu-logo.png.asset.json";
import { BookingDialog } from "./BookingDialog";


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/apartments", label: "Apartments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reach-us", label: "Reach Us" },
] as const;

export function Nav({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);



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
        solid ? "bg-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="container-lux grid grid-cols-[1fr_auto_1fr] items-center py-3 md:py-4">
        <Link to="/" aria-label="Dhahabu Suites — Home" className="flex items-center">
          <img
            src={logo.url}
            alt="Dhahabu Suites"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.72rem] tracking-[0.2em] uppercase font-semibold transition-colors hover:!text-[var(--gold)]"
              style={{ color: solid ? "var(--brown)" : "rgba(255,255,255,0.95)" }}
              activeProps={{ style: { color: "var(--gold)" } }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium rounded-sm transition-all duration-300 shadow-sm"
            style={{ background: "var(--gold)", color: "#1a1a1a" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#b8942d")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            Book Now
          </button>


          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
            style={{ color: solid ? "var(--brown)" : "#fff" }}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="container-lux flex items-center justify-between py-4">
            <img src={logo.url} alt="Dhahabu Suites" className="h-14 w-auto object-contain" />
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
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setBookingOpen(true);
              }}
              className="mt-6 px-6 py-3 text-xs tracking-[0.2em] uppercase rounded-sm"
              style={{ background: "var(--gold)", color: "#1a1a1a" }}
            >
              Book Now
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}
