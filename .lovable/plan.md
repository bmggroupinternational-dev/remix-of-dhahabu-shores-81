Merge the current `/location` and `/contact` routes into one unified "Reach Us" page, keeping the contact form and the pinpointed map while removing duplication.

## What we will change

### 1. New single page: `/reach-us`
- Rename the merged page to **"Reach Us — Dhahabu Suites"**.
- URL: `/reach-us` (matches the new title and single nav entry).
- Hero section: title "Reach Us", subtitle combining reservations + location.
- Page content:
  - Contact form from the current `/contact` page.
  - Contact info cards (phone, WhatsApp, email, address).
  - The **pinpointed Google Maps embed** from the current `/location` page.
  - Address and directions CTA.
  - Nearby attractions grid from the current `/location` page.
- Remove the duplicate map that currently appears at the bottom of `/contact`.

### 2. Navigation update
- In `src/components/site/Nav.tsx`, replace the two separate links **Location** and **Contact** with a single **Reach Us** link pointing to `/reach-us`.
- Keep the same centered three-column layout and visual balance.

### 3. Footer update
- In `src/components/site/Footer.tsx`, replace the separate **Location** link under "Explore" with **Reach Us** pointing to `/reach-us`.
- Keep the existing "Contact" column with address, phone, and email.

### 4. Route cleanup
- Delete `src/routes/location.tsx`.
- Repurpose `src/routes/contact.tsx` as `src/routes/reach-us.tsx` (or rename it) and update `createFileRoute` accordingly.
- Let `routeTree.gen.ts` regenerate from the new route files.

### 5. Redirects
- Add a catch-all redirect from `/location` and `/contact` to `/reach-us` so existing bookmarks and search links still work.

### 6. SEO metadata
- Set the merged page title to `Reach Us — Dhahabu Suites`.
- Update description to cover both reservations and the Mbezi Beach location.
- Add canonical link `/reach-us` and og:url `/reach-us`.

## Result
One clean "Reach Us" route replaces the two separate pages. Users get the contact form, the pinpointed map, and the nearby-attractions list in one place, with a single navigation entry and no duplicate map.
