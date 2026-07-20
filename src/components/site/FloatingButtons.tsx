import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        href="https://wa.me/255724972277"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="w-13 h-13 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl text-white transition-transform hover:scale-105"
        style={{ background: "#25D366", width: 52, height: 52 }}
      >
        <MessageCircle size={22} />
      </a>
      <Link
        to="/contact"
        aria-label="Book now"
        className="rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105"
        style={{ background: "var(--gold)", color: "#1a1a1a", width: 52, height: 52 }}
      >
        <CalendarCheck size={22} />
      </Link>
    </div>
  );
}
