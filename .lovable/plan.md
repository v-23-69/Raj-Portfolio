

# Mobile UI Optimization Plan

All changes will use responsive classes (e.g., `md:` prefix) so the desktop/laptop layout remains completely untouched.

---

## 1. Hero Section - 3x3 Grid on Mobile (9 images instead of 16)

**File: `src/components/ui/shuffle-grid.tsx`**

- Create a separate mobile grid order array with only 9 coins (first 9 from the current 16)
- Use the `useIsMobile()` hook to conditionally pick 9 vs 16 coins
- Change mobile grid from `grid-cols-2` to `grid-cols-3` so all 9 coins show in a compact 3x3 layout
- Tighten mobile padding and spacing for a cleaner hero presentation

**File: `src/components/HeroSection.tsx`**
- Reduce mobile padding (`py-10` instead of `py-16`)
- Make the hero text more compact on mobile: smaller logo, tighter spacing
- Stack content vertically with the coin grid above and text below (or vice versa)

---

## 2. About Section - "Read More" for Long Text

**File: `src/components/AboutSection.tsx`**

- Add a `useState` toggle (`expanded`) defaulting to `false`
- On mobile only (detected via `useIsMobile()`), show only the first paragraph by default
- Show a "Read More" / "Read Less" gold-styled button to expand/collapse the remaining paragraphs
- Desktop shows all text as-is (no change)

---

## 3. Professional Background - "Read More" for Long Text

**File: `src/components/ProfessionalBackgroundSection.tsx`**

- Same pattern as About: `useState` toggle for mobile
- Show only the intro paragraph on mobile, with "Read More" to reveal the full technology career card and details
- Desktop remains unchanged

---

## 4. Entrepreneurial Vision - Auto-Scrolling 2-Card Carousel on Mobile

**File: `src/components/EntrepreneurialVisionSection.tsx`**

- Convert the 4 mission cards into styled cards with gold icon, border, and subtle background
- On mobile: show 2 cards at a time in a horizontal auto-scrolling carousel (using `setInterval` to shift pairs every 3-4 seconds), similar to the Services marquee
- Add dot indicators below for the current pair
- On desktop: keep the existing 2x2 grid layout unchanged

---

## 5. Coin Gallery - Compact 3x3 Grid on Mobile

**File: `src/components/CoinGallery.tsx`**

- Currently shows `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Change to `grid-cols-3` on mobile (below `sm:`) to show a tight 3x3 grid
- Reduce card size on mobile: smaller aspect ratio, smaller text, tighter padding
- Show only first 9 coins on mobile (hide the rest) or show all 8 in a compact grid
- Reduce section padding on mobile (`py-16` instead of `py-24`)

---

## 6. Testimonials - Compact Mobile Layout

**File: `src/components/TestimonialsSection.tsx`**

- On mobile: remove the left-side descriptive text panel, show only the rotating testimonial card
- Reduce padding (`py-16` instead of `py-24`, `px-4` instead of `px-6`)
- Smaller quote text, tighter spacing
- Keep the dot indicators compact
- Desktop layout stays the same (side-by-side)

---

## 7. Contact Section - Clean Mobile UI

**File: `src/components/ContactSection.tsx`**

- Stack everything vertically on mobile with better spacing
- Visiting card: full width, centered
- Contact details card: compact layout with icons in a horizontal row
- Form: reduce padding, smaller input fields
- Map: reduce aspect ratio on mobile to save space
- Overall tighter padding (`py-12` instead of `py-16`)

---

## 8. Mobile CSS Refinements

**File: `src/index.css`**

- Add mobile-specific styles for the coin gallery 3x3 grid sizing
- Ensure background images render properly on mobile with `background-size: cover` and `background-attachment: scroll` (not fixed, which breaks on mobile)
- Floating social links: slightly smaller icons on mobile (`h-11 w-11` instead of `h-14 w-14`)

---

## Technical Notes

- All mobile detection uses either Tailwind responsive prefixes (`md:`, `sm:`, `lg:`) or the existing `useIsMobile()` hook
- No desktop/laptop styles are modified -- only adding mobile-specific overrides
- The "Read More" toggles use simple React state with smooth height transitions
- The Entrepreneurial Vision carousel uses `useState` + `useEffect` with `setInterval` for auto-rotation

