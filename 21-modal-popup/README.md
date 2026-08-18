# Modal Popup UI

This project is a clean product landing page with a functional modal popup. The modal opens when the user clicks the Shop Now button in the hero section and can be closed by clicking the close icon, clicking outside the popup, pressing the Escape key, or using the Continue Shopping action.

## Project Overview

The design focuses on a modern gym and fitness product storefront. It includes:

- a top navigation bar
- a hero section with marketing text and call-to-action buttons
- a product-style visual layout
- a modal popup with cart confirmation details
- related product cards and feature highlights

## Features

- Shop Now button opens the modal popup
- Close button with an X icon closes the modal
- Outside click on the overlay closes the popup
- Escape key support for accessibility
- Responsive layout using HTML, CSS, and JavaScript
- Product recommendation cards inside the popup

## File Structure

- index.html — page structure and modal markup
- style.css — all styling for the landing page and popup
- script.js — modal opening and closing logic
- assests/ — product and UI images used by the page

## Main Interaction

The modal is attached to the button with the id openModalBtn in the hero section. When clicked, JavaScript adds the active class to the overlay, making the popup visible.

The popup is hidden again when:

- the close icon is clicked
- the overlay outside the modal is clicked
- Continue Shopping is clicked
- Escape is pressed on the keyboard

## Run the Project

Open the index.html file in any browser to view the page and test the modal popup.

If you want to preview it locally with a server, you can run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

This folder is part of the UI Components Challenge and demonstrates a complete modal popup component built with vanilla HTML, CSS, and JavaScript.
