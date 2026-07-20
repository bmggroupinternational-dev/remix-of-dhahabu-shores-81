## Goal
Remove the always-visible reservation form on the home page and only show it when the user clicks **Book Now** (top nav). It should animate in over a blurred backdrop.

## Changes

### 1. `src/routes/index.tsx`
- Remove the entire `{/* BOOKING WIDGET */}` `<section id="booking">` block (the white card with check-in/out, guests, apartment, Book Now).
- Remove the now-unused `-mt-16` visual overlap. Section below (INTRO) becomes the first content after the hero.

### 2. New `src/components/site/BookingDialog.tsx`
- Reuse the same reservation UI already built inside `FloatingButtons.tsx` (react-day-picker range calendar, apartment select, guests select, WhatsApp confirm link with prefilled message).
- Extract it into a standalone controlled component: `<BookingDialog open onOpenChange />`.
- Use shadcn `Dialog` — `DialogContent` already renders a backdrop overlay. Add `backdrop-blur-md` to the overlay via a custom className, and use enter animations (`animate-scale-in` + fade) so it appears with a special effect.
- Refactor `FloatingButtons.tsx` to use this shared component so the floating calendar button and nav Book Now open the same dialog (no duplicated form logic).

### 3. `src/components/site/Nav.tsx`
- Change the desktop and mobile **Book Now** buttons from `<Link to="/reach-us">` (or current href) to a `<button>` that sets `bookingOpen` state.
- Render `<BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />` inside Nav.

## Technical notes
- Dialog overlay blur: pass `className="backdrop-blur-md bg-black/40"` to `DialogOverlay` via a small wrapper, or override in the existing shadcn `dialog.tsx` overlay with an additional class through `DialogContent`'s sibling overlay (shadcn exposes the overlay class through the primitive; simplest path is a local `<DialogContent className="...">` plus a custom overlay via `DialogPrimitive.Overlay`).
- Entrance effect: shadcn Dialog already animates via `data-[state=open]:animate-in fade-in-0 zoom-in-95` — keep and layer the blurred overlay so the "special effect" reads as backdrop blur + scale/fade.
- No route or business-logic changes; WhatsApp link and message format stay identical.

## Out of scope
- No changes to `/reach-us`, floating WhatsApp button behavior, or the reservation message content.
