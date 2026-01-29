# GSAP Learning Plan

Welcome to your GSAP (GreenSock Animation Platform) learning journey! This project is set up with Next.js 14+, Tailwind CSS, and GSAP.

## Phase 1: The Basics (Tweens)
**Goal:** Understand how to animate properties from A to B.

1.  **Your First Tween:**
    *   Open `components/GsapTest.tsx`.
    *   Change `gsap.to()` to `gsap.from()`.
    *   Try animating different properties: `opacity`, `scale`, `backgroundColor` (camelCase).
    *   Experiment with `duration` and `delay`.

2.  **Eases:**
    *   Change the `ease` property. Try `"bounce.out"`, `"elastic.out(1, 0.3)"`, `"power2.inOut"`.
    *   Resource: [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/)

3.  **Staggers:**
    *   Create multiple boxes in the component.
    *   Select them all (e.g., using a common class name) and add `stagger: 0.1` to your tween object.

## Phase 2: Timelines
**Goal:** Chain multiple animations together.

1.  **Create a Timeline:**
    *   `const tl = gsap.timeline();`
    *   Replace `gsap.to(...)` with `tl.to(...)`.
    *   Chain multiple `.to()` calls.
    *   Notice how they play one after another automatically.

2.  **Position Parameter:**
    *   Learn to overlap animations.
    *   `tl.to(target, {x:100}, "<")` (start at same time as previous)
    *   `tl.to(target, {x:100}, "+=0.5")` (wait 0.5s after previous)

## Phase 3: ScrollTrigger (The Fun Stuff)
**Goal:** Trigger animations on scroll.

1.  **Setup:**
    *   Import it: `import { ScrollTrigger } from "gsap/ScrollTrigger";`
    *   Register it: `gsap.registerPlugin(ScrollTrigger);`

2.  **Basic Trigger:**
    *   Add `scrollTrigger: { trigger: box.current }` to a tween.
    *   Make the page scrollable (add lots of dummy content).

3.  **Scrubbing and Pinning:**
    *   `scrub: true` (animation links to scrollbar)
    *   `pin: true` (element sticks while animating)

## Phase 4: Advanced React Integration
**Goal:** Master `useGSAP`.

1.  **Scope:**
    *   Understand why `{ scope: container }` is used in `useGSAP`. It allows using selector strings like `".box"` safely within the component.
2.  **Context Safe:**
    *   Use `useGSAP(() => {}, { dependencies: [state] })` to react to state changes.
    *   Use `contextSafe()` for event handlers (onClick animations).

## Resources
*   [GSAP Docs](https://gsap.com/docs/v3/)
*   [GSAP React Guide](https://gsap.com/resources/React/)
