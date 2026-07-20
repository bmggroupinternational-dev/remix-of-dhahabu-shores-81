import { useEffect, useLayoutEffect, useMemo, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, Users, X, ChevronDown, ArrowLeft, ExternalLink } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const WHATSAPP_BASE = "https://wa.me/255724972277";
const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Hello Dhahabu Suites, I would like to make a reservation",
)}`;

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION = 420;

function fmt(d?: Date) {
  if (!d) return "";
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BookingDialog({
  open,
  onOpenChange,
  originRef,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  originRef?: RefObject<HTMLElement | null>;
}) {
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [apt, setApt] = useState("2 Bedroom Apartment");
  const [step, setStep] = useState<"form" | "summary">("form");

  const [mounted, setMounted] = useState(open);
  const [entered, setEntered] = useState(false);
  const [delta, setDelta] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const nights = useMemo(() => {
    if (!range?.from || !range?.to) return 0;
    return Math.max(0, Math.round((+range.to - +range.from) / 86400000));
  }, [range]);

  const canConfirm = !!(range?.from && range?.to && nights > 0);

  const whatsappHref = useMemo(() => {
    if (!canConfirm) return WHATSAPP_DEFAULT;
    const msg = `Hello Dhahabu Suites, I would like to make a reservation.%0A%0A• Apartment: ${apt}%0A• Check-in: ${fmt(
      range!.from,
    )}%0A• Check-out: ${fmt(range!.to)}%0A• Nights: ${nights}%0A• Guests: ${guests}`;
    return `${WHATSAPP_BASE}?text=${msg}`;
  }, [canConfirm, apt, range, nights, guests]);

  // Reset to form when dialog opens
  useEffect(() => {
    if (open) setStep("form");
  }, [open]);

  // Mount / unmount with animation timing
  useEffect(() => {
    if (open) {
      setMounted(true);
    } else if (mounted) {
      setEntered(false);
      const t = setTimeout(() => setMounted(false), DURATION);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // Compute delta from button center to panel's final center
  useLayoutEffect(() => {
    if (!mounted) return;
    const compute = () => {
      const panel = panelRef.current;
      if (!panel) return;
      const panelRect = panel.getBoundingClientRect();
      const panelCenterX = panelRect.left + panelRect.width / 2;
      const panelCenterY = panelRect.top + panelRect.height / 2;
      const btn = originRef?.current?.getBoundingClientRect();
      if (btn) {
        const btnCx = btn.left + btn.width / 2;
        const btnCy = btn.top + btn.height / 2;
        setDelta({ x: btnCx - panelCenterX, y: btnCy - panelCenterY });
      } else {
        setDelta({ x: 0, y: -panelRect.height / 2 });
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [mounted, originRef]);

  // Trigger enter animation after mount + origin computed
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setEntered(true), 20);
    return () => clearTimeout(t);
  }, [mounted]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!mounted) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Scrim + blur */}
      <button
        type="button"
        aria-label="Close reservation"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 w-full h-full cursor-default"
        style={{
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
          opacity: entered ? 1 : 0,
          transition: `opacity ${DURATION}ms ${EASE}`,
        }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Reserve your stay"
        className="absolute left-1/2 w-[95vw] max-w-5xl rounded-lg border bg-background shadow-2xl overflow-hidden"
        style={{
          top: "88px",
          transformOrigin: "center center",
          transform: entered
            ? "translateX(-50%) scale(1)"
            : `translate(calc(-50% + ${delta.x}px), ${delta.y}px) scale(0.3)`,
          opacity: entered ? 1 : 0,
          transition: `transform ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}`,
        }}
      >
        {step === "form" ? (
          <div className="flex flex-col md:flex-row md:items-stretch">
            {/* Dates */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="flex-1 text-left px-5 py-4 md:py-5 border-b md:border-b-0 md:border-r hover:bg-[var(--cream)] transition-colors"
                >
                  <div
                    className="text-[0.6rem] tracking-[0.25em] uppercase mb-1 flex items-center gap-2"
                    style={{ color: "var(--gold)" }}
                  >
                    <CalendarDays size={12} /> Dates
                  </div>
                  <div className="text-sm" style={{ color: "var(--brown)" }}>
                    {range?.from && range?.to
                      ? `${fmt(range.from)} → ${fmt(range.to)} · ${nights} night${nights > 1 ? "s" : ""}`
                      : "Select check-in and check-out"}
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="p-0 w-auto">
                <Calendar
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  numberOfMonths={2}
                  disabled={{ before: new Date() }}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {/* Apartment */}
            <label className="flex-1 px-5 py-4 md:py-5 border-b md:border-b-0 md:border-r cursor-pointer relative">
              <div
                className="text-[0.6rem] tracking-[0.25em] uppercase mb-1"
                style={{ color: "var(--gold)" }}
              >
                Apartment
              </div>
              <div className="flex items-center justify-between gap-2">
                <select
                  value={apt}
                  onChange={(e) => setApt(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none appearance-none pr-6"
                  style={{ color: "var(--brown)" }}
                >
                  <option>2 Bedroom Apartment</option>
                  <option>3 Bedroom Apartment</option>
                </select>
                <ChevronDown size={14} className="absolute right-5" style={{ color: "var(--brown)" }} />
              </div>
            </label>

            {/* Guests */}
            <label className="flex-1 px-5 py-4 md:py-5 border-b md:border-b-0 md:border-r cursor-pointer relative">
              <div
                className="text-[0.6rem] tracking-[0.25em] uppercase mb-1 flex items-center gap-2"
                style={{ color: "var(--gold)" }}
              >
                <Users size={12} /> Guests
              </div>
              <div className="flex items-center justify-between gap-2">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full text-sm bg-transparent outline-none appearance-none pr-6"
                  style={{ color: "var(--brown)" }}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-5" style={{ color: "var(--brown)" }} />
              </div>
            </label>

            {/* Reserve — opens booking-engine summary placeholder */}
            <button
              type="button"
              disabled={!canConfirm}
              onClick={() => canConfirm && setStep("summary")}
              aria-disabled={!canConfirm}
              className="flex items-center justify-center px-8 py-4 md:py-5 text-[0.7rem] tracking-[0.25em] uppercase font-medium transition-colors disabled:cursor-not-allowed"
              style={{
                background: "var(--gold)",
                color: "#1a1a1a",
                opacity: canConfirm ? 1 : 0.5,
              }}
            >
              Reserve
            </button>
          </div>
        ) : (
          /* Booking-engine integration summary placeholder */
          <div className="px-6 py-6 md:px-8 md:py-7">
            <div className="flex items-center justify-between mb-5">
              <button
                type="button"
                onClick={() => setStep("form")}
                className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--brown)" }}
              >
                <ArrowLeft size={14} /> Back to selection
              </button>
              <span
                className="text-[0.6rem] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full border"
                style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
              >
                Booking engine
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-4">
                <h3 className="font-display text-xl md:text-2xl" style={{ color: "var(--brown)" }}>
                  Reservation summary
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "var(--brown)" }}>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <span style={{ color: "var(--gold)" }}>Apartment</span>
                    <span className="font-medium">{apt}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <span style={{ color: "var(--gold)" }}>Check-in</span>
                    <span className="font-medium">{fmt(range?.from)}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <span style={{ color: "var(--gold)" }}>Check-out</span>
                    <span className="font-medium">{fmt(range?.to)}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <span style={{ color: "var(--gold)" }}>Nights</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--gold)" }}>Guests</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div className="p-4 rounded-md" style={{ background: "var(--cream)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brown)" }}>
                    This reservation is ready for the upcoming booking-engine integration. The selected
                    dates, apartment, and guest count will be passed to the connected engine once it is
                    enabled.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {/* Primary booking-engine placeholder — ready for integration */}
                  <button
                    type="button"
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium rounded-sm opacity-60 cursor-not-allowed"
                    style={{ background: "var(--gold)", color: "#1a1a1a" }}
                  >
                    Complete reservation <ExternalLink size={14} />
                  </button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center text-xs tracking-[0.15em] uppercase underline-offset-4 hover:underline"
                    style={{ color: "var(--brown)" }}
                    onClick={() => onOpenChange(false)}
                  >
                    Prefer to reserve via WhatsApp?
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md border flex items-center justify-center hover:scale-105 transition-transform"
          style={{ color: "var(--brown)" }}
        >
          <X size={14} />
        </button>
      </div>
    </div>,
    document.body,
  );
}
