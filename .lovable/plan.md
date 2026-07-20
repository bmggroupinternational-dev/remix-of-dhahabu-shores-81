# Plan: Collapsible Inquiry Form on Reach Us

## Goal
Convert the "Send Inquiry" form on `/reach-us` into a collapsible card that starts folded, expands when clicked, and folds back after submission into a compact summary with a "Send another enquiry" option.

## Current state
- `src/routes/reach-us.tsx` contains a static two-column grid with contact info on the left and a fully visible form on the right.
- Submission only swaps the helper text for a "Thank you" message; the form fields remain visible.

## Changes to make

### 1. Replace the static form with a collapsible inquiry panel
- Wrap the existing form in a state-driven accordion card.
- Add a local `open` boolean (default `false`) and a `sent` boolean.
- Use smooth CSS transitions for height/opacity when expanding and collapsing.
- Render a collapsed header when `open === false`:
  - Before submission: "Send Inquiry" / "Send a reservation enquiry" with a chevron or expand indicator.
  - After submission: a success message plus a "Send another enquiry" button.

### 2. Behavior rules
- **Default**: form is folded.
- **Expand**: clicking anywhere on the collapsed header opens the panel and reveals the form fields.
- **Submit**: validate the form (HTML5 `required` fields), then set `sent = true` and `open = false`. The panel folds back.
- **Re-open**: clicking "Send another enquiry" opens the panel again and keeps the previously submitted values so the user can edit them.
- **Reset**: do not reset field values after submission; only reset `sent` to `false` if the user explicitly chooses to send a new enquiry.

### 3. Visual design
- Collapsed header: a clean card with gold accent, title, and optional chevron icon.
- Expanded panel: same form styling as today, with a "Close" icon at the top-right.
- Use `transition-all` and `overflow-hidden` on the expanding wrapper; avoid layout shift on the surrounding contact info.
- Keep the two-column grid layout at `lg` breakpoint: contact info on the left, inquiry panel on the right.

### 4. Files to edit
- `src/routes/reach-us.tsx`: refactor the form section only; no other sections change.

### 5. Acceptance criteria
- [ ] The inquiry form is collapsed on page load.
- [ ] Clicking the collapsed header expands it with a smooth animation.
- [ ] Submitting the form folds it back and shows a "Thank you" summary in the collapsed card.
- [ ] Clicking "Send another enquiry" reopens the panel with the previous values still filled.
- [ ] No console errors; typecheck passes.

