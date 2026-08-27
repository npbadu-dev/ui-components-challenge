# UI Component Challenge

![Project status](https://img.shields.io/badge/status-30%2F30%20shipped-4fd1c5?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-5-e34f26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572b6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=flat-square&logo=javascript&logoColor=111111)

A 30-day frontend practice project featuring 30 independently built UI components. Each day focuses on a different interface pattern, interaction, or content section using semantic HTML, modern CSS, and lightweight vanilla JavaScript.

The repository includes a build-log landing page that acts as a visual index for the entire challenge. Every shipped component can be opened as a standalone page with its own markup, styling, behavior, assets, and documentation.

## Links

- **Live project:** [ui-components-challenge.vercel.app](https://ui-components-challenge.vercel.app/)
- **Source repository:** [github.com/npbadu-dev/ui-components-challenge](https://github.com/npbadu-dev/ui-components-challenge)

## Component Catalog

| Day | Component                                                   | Build                                           |
| --: | ----------------------------------------------------------- | ----------------------------------------------- |
|  01 | [Sidebar Navigation](01-sidebar-navigation/)                | [Open](01-sidebar-navigation/index.html)        |
|  02 | [Top Navigation Bar](02-top-navigation-bar/)                | [Open](02-top-navigation-bar/index.html)        |
|  03 | [Hero Section](03-hero-section/)                            | [Open](03-hero-section/index.html)              |
|  04 | [Login Form](04-login-page/)                                | [Open](04-login-page/index.html)                |
|  05 | [Registration Form](05-registration-form/)                  | [Open](05-registration-form/index.html)         |
|  06 | [Product Card](06-product-card/)                            | [Open](06-product-card/index.html)              |
|  07 | [Pricing Card](07-pricing-card/)                            | [Open](07-pricing-card/index.html)              |
|  08 | [Feature Cards Section](08-feature-cards-section/)          | [Open](08-feature-cards-section/index.html)     |
|  09 | [Testimonial Section](09-testimonial-section/)              | [Open](09-testimonial-section/index.html)       |
|  10 | [Footer](10-footer/)                                        | [Open](10-footer/index.html)                    |
|  11 | [FAQ Accordion](11-faq-accordion/)                          | [Open](11-faq-accordion/index.html)             |
|  12 | [Contact Form](12-contact-form/)                            | [Open](12-contact-form/index.html)              |
|  13 | [Newsletter Subscription](13-newsletter-subscription/)      | [Open](13-newsletter-subscription/index.html)   |
|  14 | [Team Members Section](14-team-members-section/)            | [Open](14-team-members-section/index.html)      |
|  15 | [Statistics Section](15-statistics-section/)                | [Open](15-statistics-section/index.html)        |
|  16 | [Search Bar](16-search-bar/)                                | [Open](16-search-bar/index.html)                |
|  17 | [Dropdown Menu](17-dropdown-menu/)                          | [Open](17-dropdown-menu/index.html)             |
|  18 | [Breadcrumb Navigation](18-breadcrumb-navigation/)          | [Open](18-breadcrumb-navigation/index.html)     |
|  19 | [Pagination](19-pagination/)                                | [Open](19-pagination/index.html)                |
|  20 | [Tabs Component](20-tabs-component/)                        | [Open](20-tabs-component/index.html)            |
|  21 | [Modal Popup](21-modal-popup/)                              | [Open](21-modal-popup/index.html)               |
|  22 | [Image Gallery](22-image-gallery/)                          | [Open](22-image-gallery/index.html)             |
|  23 | [Toast Notification](23-toast-notification/)                | [Open](23-toast-notification/index.html)        |
|  24 | [Bubble](24-bubble/)                                        | [Open](24-bubble/index.html)                    |
|  25 | [User Profile Card](25-user-profile-card/)                  | [Open](25-user-profile-card/index.html)         |
|  26 | [Settings Form](26-setting-form/)                           | [Open](26-setting-form/index.html)              |
|  27 | [Blog Card Grid](27-block-card-grid/)                       | [Open](27-block-card-grid/index.html)           |
|  28 | [E-commerce Product Details](28-ecommerce-product-details/) | [Open](28-ecommerce-product-details/index.html) |
|  29 | [Loader Animation](29-loader/)                              | [Open](29-loader/index.html)                    |
|  30 | [Multi-Step Form](30-multi-step-form/)                      | [Open](30-multi-step-form/index.html)           |

Each component folder contains a local README describing its implementation and behavior.

## Highlights

- 30 standalone UI builds organized by day and interaction pattern.
- Responsive layouts designed for desktop, tablet, and mobile viewports.
- Interactive patterns including navigation, forms, tabs, modals, galleries, accordions, pagination, dropdowns, toasts, and loaders.
- Form validation, state changes, progress indicators, and other client-side behaviors implemented with vanilla JavaScript.
- Reusable styling techniques including CSS custom properties, Grid, Flexbox, transitions, keyframe animation, focus states, and responsive media queries.
- Asset-backed components for imagery-focused pages such as the hero, testimonials, team members, gallery, and product details views.
- Individual component documentation for easier review and iteration.

## Technology

- **HTML5** for document structure and semantic form controls
- **CSS3** for layout, responsive design, visual systems, transitions, and animations
- **Vanilla JavaScript** for DOM updates, user interactions, and client-side validation
- **Vercel** for static deployment

No frontend framework, bundler, package manager, or runtime dependency is required.

## Repository Structure

```text
ui-components-challenge/
├── 01-sidebar-navigation/
│   ├── index.html
│   ├── README.md
│   ├── script.js
│   ├── style.css
│   └── variable.css        # Optional component-specific design tokens
├── 02-top-navigation-bar/
│   └── ...
├── ...
├── 30-multi-step-form/
│   └── ...
├── index.html               # Build-log landing page
├── style.css                # Landing-page styles
├── script.js                # Component registry and filters
└── README.md                # Project documentation
```

Most component directories follow the same three-file implementation pattern:

- `index.html` contains the page structure and accessible controls.
- `style.css` contains the component's visual system and responsive rules.
- `script.js` contains interaction logic where the component requires it.

Some components also include an `assets/` or `assests/` directory for local images and other visual resources.

## Build Log Landing Page

The root page renders its component index from the `components` array in [`script.js`](script.js). Each record contains the day number, folder slug, display title, description, and shipped state.

The landing page automatically:

- Builds the 30 component cards from the registry.
- Generates each folder path from the zero-padded day number and slug.
- Shows the shipped count and progress ticks.
- Filters the index by **All**, **Shipped**, or **Upcoming**.
- Links shipped cards to their standalone `index.html` page.
- Keeps upcoming cards visible but non-clickable until their `built` value is enabled.

When adding or renaming a component, keep the registry's `day` and `slug` values synchronized with the actual `NN-kebab-case` directory name. The deployed project currently contains all 30 component folders and reports `30 of 30 components shipped`.

## Run Locally

Because this is a static project, it can be opened directly in a browser. A local server is recommended for consistent asset loading and navigation behavior.

```bash
git clone https://github.com/npbadu-dev/ui-components-challenge.git
cd ui-components-challenge
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. To view a component directly, open a path such as `http://localhost:8000/11-faq-accordion/`.

## Development Workflow

1. Choose a component folder or create the next numbered folder.
2. Build the interface in `index.html`.
3. Add responsive and interactive behavior in `style.css` and `script.js`.
4. Document the component in its local `README.md`.
5. Update the root `components` registry with the correct title, slug, description, and `built` state.
6. Test the standalone page at desktop and mobile widths.
7. Verify that the landing-page card points to the correct folder before deploying.

## Deployment

The project is deployed as a static site on Vercel. There is no build command or environment configuration required. A deployment can be created by importing the GitHub repository into Vercel and using the repository root as the project directory.

## Scope

This repository is a frontend component study and showcase rather than a production application. Forms, authentication controls, commerce actions, and subscription flows are demonstrations of interface behavior; they do not connect to production APIs, process payments, or persist user data unless explicitly implemented inside a component.

## Author

Built and maintained by [Nitesh Prasad Badu](https://github.com/npbadu-dev).
