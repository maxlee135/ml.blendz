# CLAUDE.md — Garage Barbershop Platform

## What this project is
A real website for a real business: [SHOP NAME], a barbershop run by Max, a high school student, out of his garage in San Jose, CA. Max has done hundreds of haircuts, recently added bleaching/coloring, and has a TikTok/Instagram following (one video over 1M views). This site serves real clients AND serves as a portfolio piece for college applications. Both purposes matter.

## Who you're working with
Max is a smart high schooler and a first-time developer. He understands his business deeply; he does not yet understand web development.
- Explain what you're doing and WHY in plain English as you go. Treat every session as a chance to teach him one thing about how the web works.
- Before building anything significant, state your plan in 3–5 plain sentences and let him approve or change it.
- Ask him real business questions (pricing, services, hours, brand vibe) instead of inventing placeholder answers. His real answers are better than your guesses.
- Never dump jargon. If you must use a technical term, define it in one sentence the first time.

## Tech stack (keep it simple — do not deviate without asking)
- **Framework:** Next.js (App Router) + Tailwind CSS
- **Hosting:** Vercel (free Hobby plan), auto-deploy from GitHub `main` branch
- **Repo:** GitHub, public (it's a portfolio piece)
- **Bookings (Phase 1):** simple request form → email notification. No accounts, no payments, no database yet.
- **Data (Phase 2):** start with a structured JSON/CSV file Max updates by hand; only graduate to a hosted database (e.g., Supabase/Vercel Postgres free tier) if the manual file becomes painful. Never add infrastructure Max can't explain.
- **No paid services. Ever.** If something would cost money, stop and propose a free alternative.

## Project phases (build in order, finish each before starting the next)
1. **Live marketing site** — home, services + prices, gallery, booking request form, About page telling Max's story. Deployed and shareable.
2. **Business dashboard** — private page (simple password protection) showing revenue over time, cut count, repeat-client rate, average ticket, service mix. Powered by Max's real numbers.
3. **Content engine** — gallery tied to his best TikTok/IG posts, embedded videos, and a "by the numbers" public stats section (total cuts, years running, views).
4. **Later ideas (do not start unsolicited):** AI style consultation tool, viral content case study page, teen-business playbook.

## Brand and voice
- Confident, fun, a little playful — it's a teenager's garage barbershop with 1M-view energy, not a corporate salon. But clean and professional enough that a parent (or admissions officer) trusts it.
- Mobile-first. Almost all of Max's clients and followers will open this on a phone.
- Real photos over stock photos, always. If no photo exists yet, use a tasteful placeholder and add a TODO for Max.

## Hard rules
- **Privacy:** client first names or initials only. No client photos without Max confirming he has permission. No exact home address on the site — neighborhood-level only ("[Neighborhood], San Jose") with exact address shared after booking.
- **Honesty:** every number on the site or dashboard is real. If Max doesn't have a stat, leave it out — never estimate or inflate.
- **Minor safety:** Max is under 18. No features that collect sensitive personal data from visitors. Booking form collects name, contact, requested service, preferred time. Nothing else.
- **Git hygiene:** commit at every working checkpoint with clear messages ("Add services page with real pricing"), not one giant commit. Push to GitHub at the end of every session.
- **Accessibility:** decent contrast, alt text on images, forms that work with a keyboard.

## Definition of done (every phase)
- Works on a phone screen first, desktop second
- Deployed live on Vercel and Max has opened the URL himself
- Max can explain to another person what was built and how it works
- Committed and pushed to GitHub
