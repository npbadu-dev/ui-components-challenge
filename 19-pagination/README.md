# Pagination UI Component

A simple pagination component built with HTML, CSS, and vanilla JavaScript. It demonstrates a clean, interactive page selector with previous/next controls, active page highlighting, and ellipsis grouping for larger page counts.

## Overview

This component is part of the UI Component Challenge and focuses on a common web pattern used in lists, search results, tables, and product grids. The page numbers are generated dynamically, so the UI remains readable and usable even when there are many pages.

## Features

- Previous and next button navigation
- Active page state styling
- Dynamic pagination rendering
- Ellipsis separators for long page ranges
- Disabled controls at the first and last page
- Responsive layout for smaller screens
- No external framework or build setup required

## Project Structure

```text
19-pagination/
├── index.html
├── script.js
├── style.css
├── README.md
```

## Files

- `index.html` — component structure and markup
- `style.css` — visual design, button states, spacing, and layout
- `script.js` — pagination logic and page rendering
- `README.md` — project notes and usage instructions

## How to Run

Open `index.html` directly in your browser, or serve the folder locally:

```bash
cd /home/npbadu/Desktop/ui-components-challenge/19-pagination
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Logic Behavior

The JavaScript keeps track of the current page and rebuilds the visible page list based on that value. When the page count is large, the UI shows a compact version with ellipses instead of every individual page number. Clicking a page updates the active state and re-renders the pagination buttons.

## Learning Outcome

This component teaches:

- DOM manipulation with JavaScript
- conditional rendering for paginated UI
- state-driven interface updates
- button state handling for disabled and active controls
- clean styling for reusable UI blocks
