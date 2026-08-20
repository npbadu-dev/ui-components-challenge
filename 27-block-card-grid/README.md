# Block Card Grid

A responsive-style blog card grid for a fitness and wellness website. The component presents six article cards in a three-column layout, with a heading area, category labels, article metadata, hover states, and a pagination control.

## Features

- Six fitness, nutrition, gear, review, and lifestyle article cards.
- Three-column CSS Grid layout with two rows.
- Article cards include an image, category, title, description, publication date, reading time, and `Read More` link.
- Cards in the first row lift on hover; cards in the second row move down slightly.
- Pressing a card scales it down briefly through the `:active` state.
- Pagination controls are styled for pages 1, 2, 3, and 8, with previous and next arrows.
- Font Awesome icons are loaded from the CDN for calendar, clock, and chevron icons.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Defines the blog heading, six cards, and pagination markup. |
| `style.css` | Provides the layout, typography, colors, card styling, hover states, and pagination styles. |
| `script.js` | Reserved for interactivity; currently empty. |
| `assets/img1.jpg` to `assets/img6.jpg` | Images used by the six article cards. |

## Run Locally

Open `index.html` directly in a browser, or serve the parent project with a local development server and navigate to `27-block-card-grid/`.

The page needs an internet connection for the Font Awesome stylesheet loaded from cdnjs. The local article images work without a network connection.

## Customization

- Change article content, dates, reading times, or categories in `index.html`.
- Replace the six JPG files in `assets/` while keeping their filenames, or update the corresponding `src` attributes.
- Adjust the grid, card dimensions, spacing, and responsive behavior in `style.css`.
- Add pagination or article-link behavior in `script.js`; the current buttons and `Read More` links are presentational only.

## Current Limitations

- The pagination buttons do not change pages.
- The previous and next arrows are not wired to navigation.
- The `Read More` links currently use placeholder `#` destinations.
- The stylesheet does not include a breakpoint-specific mobile grid, so narrow layouts may require additional responsive rules.
