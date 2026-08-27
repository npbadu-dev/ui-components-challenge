# Loader Collection

A collection of 15 animated loading indicators built with semantic HTML and
pure CSS. Each loader is displayed in its own card so the animations can be
compared side by side.

## Preview

Open `index.html` in a browser to view the collection. No build step, server,
package manager, or external dependency is required.

## Included Loaders

1. **Simple Spinner** - Rotates a circular border with one highlighted edge.
2. **Double Ring** - Rotates a ring with contrasting top and bottom borders.
3. **Dot Loader** - Moves three dots vertically with staggered delays.
4. **Bouncing Balls** - Bounces three colored balls in sequence.
5. **Loading Bars** - Scales five bars vertically with staggered timing.
6. **Pulse Loader** - Expands and fades a circular pulse.
7. **Square Loader** - Rotates a square while changing its corner radius.
8. **Ripple Loader** - Expands and fades a circular outline.
9. **Hourglass** - Rotates a CSS-built hourglass shape.
10. **Moving Line** - Slides a highlighted segment across a horizontal track.
11. **Three Bars** - Animates three bars with staggered vertical scaling.
12. **Orbit Loader** - Rotates a dot around a circular track.
13. **Wave Loader** - Changes the height of five bars in sequence.
14. **Heartbeat** - Scales a CSS-built heart shape rhythmically.
15. **Skeleton Loader** - Shimmers two placeholder bars using a moving gradient.

## Project Structure

```text
29-loader/
├── index.html   # Page structure and loader markup
├── style.css    # Layout, card styling, loader shapes, and animations
├── script.js    # Reserved for future behavior; currently empty
└── README.md    # Project documentation
```

## Implementation Details

- The page uses a responsive CSS grid with `auto-fit` and a minimum card width
  of 220px.
- The main container is limited to 1200px and centered on the page.
- Each loader is composed from `div` and `span` elements, CSS borders, pseudo-
  elements, transforms, opacity, and `clip-path`.
- Animation timing is controlled with `@keyframes`, `animation-duration`,
  `animation-delay`, and iteration settings in `style.css`.
- The cards have a hover state that lifts them slightly and changes the border
  color.
- There are no buttons, user-controlled states, data fetching, or JavaScript
  interactions. The animations run continuously after the page loads.

## Customization

To reuse a loader, copy its corresponding HTML element and CSS rules into
another component. Adjust the animation duration or `animation-delay` values
to change the speed and rhythm. The color palette is defined directly in
`style.css`, so individual loader colors can be changed at the selector level.

## Accessibility Notes

The collection is visual and does not currently expose loading status to
assistive technologies. When adapting one of these animations for a real
loading state, pair it with descriptive text or an accessible status element,
and consider honoring `prefers-reduced-motion` for users who request less
animation.
