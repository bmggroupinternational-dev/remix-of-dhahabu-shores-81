import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, CalendarCheck } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

const WHATSAPP_DEFAULT = `https://wa.me/255724972277?text=${encodeURIComponent(
  "Hello Dhahabu Suites, I would like to make a reservation",
)}`;

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
