# Lundance

A cheerful, beginner-friendly K-pop dance course website for Lund and Malmö. Lundance helps people discover a class, compare simple course packages, and request a spot in a lightweight booking flow.

You can visit through this link: https://xinlei1126.github.io/lundance/

## Project idea and plan

- **What:** A responsive frontend for a local K-pop dance course.
- **Who:** Curious beginners and other dancers in Lund and Malmö.
- **Purpose:** Make it easy to understand what K-pop choreography is, meet the teacher, see prices and hours, and take a first step toward booking.
- **Main features:** Responsive navigation, course/package cards, booking form with client-side validation and confirmation, teacher and studio information, and contact links.

### Simple page plan

`Header → Hero / introduction → Class packages → Teacher → Locations & hours → Booking CTA → Footer`

Booking is a frontend demo: it validates the form and shows a confirmation, but does not send, store, or process personal information or payments.

## Packages and studio details

- One class: **250 SEK per person**
- 10-class pass: **2,400 SEK per person** (240 SEK per class)
- Locations: Lund and Malmö
- Opening hours: Every day, 16:00–22:00 (class times vary)

Jamie and the contact information are fictional project details. The `.example` email domain is reserved for examples. Replace these, and add confirmed studio addresses, before using the site for a real business.

## Built with

- React 19
- Vite
- HTML5 and CSS3 (Grid, Flexbox, responsive breakpoints)
- JavaScript and React state/events for mobile navigation and booking

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal. Create a production build with `npm run build`; the output is written to `dist/`.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `lundance` and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The included workflow builds the Vite app and deploys it to Pages each time you push to `main`.
4. After the workflow succeeds, GitHub shows the live URL in **Settings → Pages**. For a repository named `lundance`, it is usually `https://YOUR-USERNAME.github.io/lundance/`.

The Vite config uses relative asset paths, so the app can be served from a GitHub Pages project subpath.

## Technologies and concepts demonstrated

Reusable React components and props, state and event handlers, conditional rendering, accessible form labels, client-side validation, responsive CSS, semantic page sections, and a deploy workflow.
