# UI Component Challenge — Build Log

A landing page that indexes a 30-day UI component challenge. Each day's
component lives in its own folder (`01-sidebar-navigation`,
`02-top-navigation-bar`, …) and this page links out to every one of them.

## Structure

```
.
├── 01-sidebar-navigation/
│   ├── index.html
│   ├── README.md
│   ├── script.js
│   ├── style.css
│   └── variable.css
├── 02-top-navigation-bar/
│   └── ...
├── index.html       ← this landing page
├── style.css        ← this landing page's styles
├── script.js        ← this landing page's logic or script
└── README.md
```

## Marking a day as shipped

Open `index.html` and find the `components` array near the bottom of the
file. Each entry looks like this:

```js
{ day: 3, slug: "hero-section", title: "Hero Section", desc: "...", built: false }
```

Once you've built that day's folder, flip `built` to `true`:

```js
{ day: 3, slug: "hero-section", title: "Hero Section", desc: "...", built: true }
```

The card will automatically:

- become clickable, linking to `03-hero-section/index.html`
- swap its stamp from "Locked" to "Shipped"
- count toward the progress ledger and tick row in the hero

The folder name is derived from `day` + `slug`, so keep those two fields in
sync with your actual folder names (`NN-kebab-case-title`).

## Adding a new day

Add a new object to the `components` array in day order. No other markup
needs to change — the grid, filters, and progress ledger all render from
that array.

## Filters

The "All / Shipped / Upcoming" buttons above the grid filter the card list
client-side; no build step or server required. Just open `index.html` in a
browser.
