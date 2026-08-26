# Remix of Dhahabu Shores (81)

# MASTER PROMPT — Dhahabu Suites Website

## 1. Project Brief

Build a world-class, ultra-premium, fully responsive **multi-page website** for **Dhahabu Suites**, a luxury serviced apartment property in Mbezi Beach, Dar es Salaam, Tanzania.

The site must position Dhahabu Suites as one of the finest premium serviced-apartment brands in Tanzania — comparable in feel and quality to Four Seasons Residences, Mandarin Oriental Residences, Marriott Executive Apartments, Aman Resorts, Airbnb Luxe, Blueground, and Sonder. Do not produce a generic hotel or apartment template. The result must be immersive, editorial, visually refined, and conversion-focused, with every page driving toward direct bookings and inquiries.

**Brand name:** Dhahabu Suites
**Tagline:** Luxury Living by Mbezi Beach
**Alternative marketing lines (use sparingly, for variety across pages):**
- "Rest. Relax. Recharge."
- "Live. Relax. Enjoy."
- "Your Space. Your Peace. Your Place."

**Note on imagery:** I will supply the property's real photography separately. Use clearly marked, correctly-proportioned image placeholders in the layout (labeled by section, e.g. `[Living Room — 2BR Apartment]`) so real images can be dropped in without breaking the design.

---

## 2. Brand Guidelines

**Colors**
| Role | Color | Hex |
|---|---|---|
| Primary / dominant background | Primary White | `#FFFFFF` |
| Headings, navigation, UI accents | Luxury Brown | `#69584D` |
| Accent only — buttons, icons, hover states, dividers | Premium Gold | `#D4AF37` |

Rules: White must dominate the layout for a spacious, clean, elegant feel. Gold is an accent only — never a background or large surface color. Brown carries typography and structural UI elements. Keep the palette restrained and timeless throughout.

**Typography**
- Headings: an elegant serif — Playfair Display or Cormorant Garamond — large, with generous letter/line spacing.
- Body text: a clean modern sans-serif — Inter or Poppins — highly readable, comfortable line height.

**Visual style**
Minimal, luxurious, editorial, image-driven. Generous white space, soft shadows, refined spacing, rounded corners where appropriate, smooth transitions, subtle animation, premium photography. No clutter, no unnecessary borders, no visual noise.

---

## 3. Site Architecture (Multi-Page)

1. **Home**
2. **About**
3. **Apartments** (index page)
   - **2 Bedroom Apartment** (detail page)
   - **3 Bedroom Apartment** (detail page)
4. **Amenities**
5. **Gallery**
6. **Lifestyle**
7. **Location**
8. **Contact**

Global elements (present on every page): sticky navigation bar, footer, floating WhatsApp button, floating "Book Now" button, scroll-to-top button. Navigation becomes semi-transparent on scroll and stays accessible at all times.

---

## 4. Page-by-Page Requirements

### Home
- Full-screen hero with rotating high-quality photography (living room, bedrooms, bathrooms, pool, exterior). Smooth fade transitions with subtle zoom (Ken Burns effect). Soft overlay for text legibility without hiding the imagery.
- Hero heading: **"Luxury Living by Mbezi Beach"**
- Supporting line: *"Experience premium serviced apartments designed for comfort, elegance, and privacy in Dar es Salaam."*
- Two primary CTAs: **Book Your Stay** / **Explore Apartments**
- Subtle animated scroll indicator.
- Booking widget directly below the hero (Marriott/Hilton-style): Check-in, Check-out, Guests, Apartment Type, prominent **Book Now** button. Soft shadows, rounded inputs, refined spacing.
- Condensed "Why Choose Dhahabu Suites" highlights (see Section 7 below), linking to the full Amenities/About content.
- Testimonials preview.
- Closing CTA band before the footer.

### About
- Introduce Dhahabu Suites as a premium serviced-apartment brand for business travelers, families, tourists, expatriates, and long-stay guests.
- Emphasize spacious living, comfort, privacy, security, and modern hospitality.
- Include the "Why Choose Dhahabu Suites" section in full (Section 7).

### Apartments (index page)
- Two apartment category cards: **2 Bedroom Apartments** and **3 Bedroom Apartments**, each with a hero image, short description, starting highlights, and a "View Details" link to its own page.
- Hover animation on each card.

### Apartment Detail Pages (2BR / 3BR — same template, separate pages)
Each page includes:
- Full-width hero image + elegant image gallery/carousel (swipe-enabled on mobile)
- Description of the apartment
- Specs: guest capacity, bedrooms, bathrooms, living room, dining area
- Fully equipped kitchen, workspace, Smart TV, high-speed Wi-Fi, air conditioning, housekeeping, swimming pool access
- Sticky reservation button
- **Book Now** CTA

### Amenities
Grid of premium icon cards (subtle hover animation each):
Swimming Pool · 24/7 Security · External CCTV Surveillance · Secure Parking · High-Speed Internet · Smart TV · DSTV · Azam TV · Fully Equipped Kitchen · Bathtub · Outdoor Pergola · Professional Housekeeping · Air Conditioning · Dedicated Workspace · Family Friendly · Private Living Environment

### Gallery
Masonry grid, organized by category: Living Room · Bedrooms · Bathrooms · Kitchen · Swimming Pool · Exterior · Pergola · Property Grounds. Images open in a fullscreen lightbox with smooth zoom and next/prev navigation.

### Lifestyle
Elegant image cards (subtle hover effects) for each use case: Business Travel · Family Vacations · Weekend Getaways · Long Stay Accommodation · Corporate Housing · Holiday Retreats.

### Location
- Embedded Google Map centered on Mbezi Beach, Dar es Salaam (use a real embeddable Google Maps iframe — I will provide the exact address/pin).
- Nearby-attractions list: beaches, restaurants, supermarkets, shopping centers, business districts, healthcare facilities, major transport routes.
- "Get Directions" button.

### Contact
- Address: Dhahabu Suites, Mbezi Beach, Dar es Salaam, Tanzania
- Phone: +255 724 972 277
- Email: dhahabusuitesdar@gmail.com
- Interactive contact/inquiry form
- Call button, WhatsApp click-to-chat button, embedded map, directions button

---

## 5. "Why Choose Dhahabu Suites" (used on Home + About)
Luxury Interiors · Modern Architecture · Prime Mbezi Beach Location · Exceptional Comfort · Privacy · Professional Hospitality · Fast Internet · Family-Friendly Environment · Secure Living · Spacious Apartments — each with premium iconography.

## 6. Testimonials
Five-star review cards with guest name, profile image, rating, and short quote. Smooth automatic sliding carousel.

## 7. Footer (global)
Logo · navigation links · contact info · newsletter signup · social media links · copyright · Privacy Policy · Terms & Conditions links.

---

## 8. Interaction & Motion
Fade-in on scroll, image reveal, text reveal, smooth scrolling, subtle parallax, button hover states, refined loading transitions, soft micro-interactions. Keep all motion subtle and sophisticated — never distracting.

## 9. Technical Requirements
- Fully responsive across desktop, tablet, and mobile, with touch-friendly controls and swipe-enabled galleries on mobile.
- Fast load times: lazy-loaded images, compressed assets, modern image formats, clean semantic HTML, optimized CSS/JS.
- Accessibility best practices (alt text, contrast, keyboard navigation).
- SEO: descriptive page titles, meta descriptions, Open Graph tags, schema markup, SEO-friendly URLs, mobile-first indexing.

## 10. Overall Feel
Every page — imagery, typography, spacing, motion, and copy — should reinforce Dhahabu Suites as a modern, private, and sophisticated luxury serviced-apartment brand, and should move visitors naturally toward booking or making contact.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7a1b7bc4-d3ee-4465-90fc-fb0cce50d546).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
