import { useMemo, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MessageCircle, Users, X, Sparkles } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = "https://wa.me/255724972277";
const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Hello Dhahabu Suites, I would like to make a reservation",
)}`;

function fmt(d?: Date) {
  if (!d) return "";
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BookingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [apt, setApt] = useState("2 Bedroom Apartment");

  const nights = useMemo(() => {
    if (!range?.from || !range?.to) return 0;
    return Math.max(0, Math.round((+range.to - +range.from) / 86400000));
  }, [range]);

  const canConfirm = !!(range?.from && range?.to && nights > 0);

  const confirmHref = useMemo(() => {
    if (!canConfirm) return WHATSAPP_DEFAULT;
    const msg = `Hello Dhahabu Suites, I would like to make a reservation.%0A%0A• Apartment: ${apt}%0A• Check-in: ${fmt(
      range!.from,
    )}%0A• Check-out: ${fmt(range!.to)}%0A• Nights: ${nights}%0A• Guests: ${guests}`;
    return `${WHATSAPP_BASE}?text=${msg}`;
  }, [canConfirm, apt, range, nights, guests]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/40 backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-[95vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 md:p-8 shadow-2xl duration-300 sm:rounded-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=open]:slide-in-from-bottom-4",
          )}
        >
          <DialogHeader>
            <div
              className="mx-auto sm:mx-0 mb-2 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              <Sparkles size={12} /> Reserve
            </div>
            <DialogTitle
              className="font-display text-2xl md:text-3xl"
              style={{ color: "var(--brown)" }}
            >
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
              <div
                className="rounded-md border p-4 text-sm space-y-2"
                style={{ background: "var(--cream)" }}
              >
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span style={{ color: "var(--brown)" }}>
                    {range?.from ? fmt(range.from) : "—"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out</span>
                  <span style={{ color: "var(--brown)" }}>
                    {range?.to ? fmt(range.to) : "—"}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-muted-foreground">Nights</span>
                  <span style={{ color: "var(--brown)" }}>{nights || "—"}</span>
                </div>
              </div>

              <label className="block">
                <span
                  className="text-[0.65rem] tracking-[0.25em] uppercase"
                  style={{ color: "var(--brown)" }}
                >
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
                <span
                  className="text-[0.65rem] tracking-[0.25em] uppercase flex items-center gap-2"
                  style={{ color: "var(--brown)" }}
                >
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
                onOpenChange(false);
              }}
              className="btn-gold btn-gold-hover"
              style={!canConfirm ? { opacity: 0.5, pointerEvents: "none" } : undefined}
            >
              <MessageCircle size={14} /> Confirm on WhatsApp
            </a>
          </DialogFooter>

          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            style={{ color: "var(--brown)" }}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
