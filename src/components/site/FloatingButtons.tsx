import { useEffect, useMemo, useState } from "react";
import { ArrowUp, MessageCircle, CalendarCheck, Users } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const WHATSAPP_BASE = "https://wa.me/255724972277";
const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello Dhahabu Suites, I would like to make a reservation")}`;

function fmt(d?: Date) {
  if (!d) return "";
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [apt, setApt] = useState("2 Bedroom Apartment");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nights = useMemo(() => {
    if (!range?.from || !range?.to) return 0;
    return Math.max(0, Math.round((+range.to - +range.from) / 86400000));
  }, [range]);

  const canConfirm = !!(range?.from && range?.to && nights > 0);

  const confirmHref = useMemo(() => {
    if (!canConfirm) return WHATSAPP_DEFAULT;
    const msg = `Hello Dhahabu Suites, I would like to make a reservation.%0A%0A• Apartment: ${apt}%0A• Check-in: ${fmt(range!.from)}%0A• Check-out: ${fmt(range!.to)}%0A• Nights: ${nights}%0A• Guests: ${guests}`;
    return `${WHATSAPP_BASE}?text=${msg}`;
  }, [canConfirm, apt, range, nights, guests]);

  return (
    <>
      <div className="fixed z-40 right-4 md:right-6 bottom-4 md:bottom-6 flex flex-col gap-3">
        {show && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform hover:-translate-y-0.5"
            style={{ color: "var(--brown)" }}
          >
            <ArrowUp size={18} />
          </button>
        )}
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          aria-label="Message us on WhatsApp"
          className="rounded-full flex items-center justify-center shadow-xl text-white transition-transform hover:scale-105"
          style={{ background: "#25D366", width: 52, height: 52 }}
        >
          <MessageCircle size={22} />
        </a>
        <button
          onClick={() => setOpen(true)}
          aria-label="Reserve a booking"
          className="rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105"
          style={{ background: "var(--gold)", color: "#1a1a1a", width: 52, height: 52 }}
        >
          <CalendarCheck size={22} />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl" style={{ color: "var(--brown)" }}>
              Reserve your stay
            </DialogTitle>
            <DialogDescription>
              Select your check-in and check-out dates. We'll confirm availability on WhatsApp.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 md:grid-cols-[auto,1fr]">
            <div className="flex justify-center">
              <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={1}
                disabled={{ before: new Date() }}
                className="pointer-events-auto"
              />
            </div>

            <div className="space-y-4">
              <div className="rounded-md border p-4 text-sm space-y-2" style={{ background: "var(--cream)" }}>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span style={{ color: "var(--brown)" }}>{range?.from ? fmt(range.from) : "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out</span>
                  <span style={{ color: "var(--brown)" }}>{range?.to ? fmt(range.to) : "—"}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-muted-foreground">Nights</span>
                  <span style={{ color: "var(--brown)" }}>{nights || "—"}</span>
                </div>
              </div>

              <label className="block">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: "var(--brown)" }}>
                  Apartment
                </span>
                <select
                  value={apt}
                  onChange={(e) => setApt(e.target.value)}
                  className="mt-1 w-full border-b border-black/15 py-2 text-sm outline-none focus:border-[var(--gold)] bg-transparent"
                >
                  <option>2 Bedroom Apartment</option>
                  <option>3 Bedroom Apartment</option>
                </select>
              </label>

              <label className="block">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase flex items-center gap-2" style={{ color: "var(--brown)" }}>
                  <Users size={12} /> Guests
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-1 w-full border-b border-black/15 py-2 text-sm outline-none focus:border-[var(--gold)] bg-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <button
              type="button"
              onClick={() => setRange(undefined)}
              className="text-xs tracking-[0.25em] uppercase px-4 py-2"
              style={{ color: "var(--brown)" }}
            >
              Clear
            </button>
            <a
              href={confirmHref}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!canConfirm}
              onClick={(e) => {
                if (!canConfirm) {
                  e.preventDefault();
                  return;
                }
                setOpen(false);
              }}
              className="btn-gold btn-gold-hover"
              style={!canConfirm ? { opacity: 0.5, pointerEvents: "none" } : undefined}
            >
              <MessageCircle size={14} /> Confirm on WhatsApp
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
