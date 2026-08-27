# Ecommerce Product Details

A responsive, static ecommerce product-detail page for **PixelFit**, featuring the Flex Gym Duffle Bag. The component is built with plain HTML, CSS, and JavaScript and can be opened directly in a browser without a build step.

## Features

- PixelFit header with navigation, product search field, account icon, and cart count.
- Breadcrumb trail for the product location.
- Product gallery with five image thumbnails, active-thumbnail styling, and previous/next controls.
- Product summary with best-seller badge, rating, pricing, discount, description, feature highlights, color swatches, quantity control, purchase actions, and delivery/returns/payment messaging.
- Description panel with product benefits and a premium-quality callout.
- Related products list for a bottle, resistance bands, and gym towel.
- Responsive layout for desktop, tablet, and mobile widths.

## Interactions

The behavior currently implemented in `script.js` is intentionally lightweight:

- Clicking a thumbnail changes the main gallery image and active state.
- The gallery arrows cycle through all five images and wrap around at either end.
- The quantity decrement button stops at `1`; the increment button increases the displayed quantity.
- Clicking a color swatch moves the selected outline to that swatch.

The search field, navigation links, account/cart icons, expand-image button, tabs, `Add to Cart`, `Buy Now`, `View All`, and related-product `+` buttons are visual controls only. They do not currently perform application or navigation actions.

## File Structure

```text
28-ecommerce-product-details/
├── index.html   # Page structure and product content
├── style.css    # Theme variables, layout, components, and media queries
├── script.js    # Gallery, quantity, and swatch interactions
├── README.md    # Component documentation
└── assets/
	├── imb2.jpg     # Main product image and quality-card image
	├── img1.jpg     # Gallery image
	├── img3.jpg     # Gallery image
	├── img4.jpg     # Gallery image
	├── img5.jpg     # Gallery image
	├── bottle.jpg   # Related product image
	├── band.jpg     # Related product image
	└── towel.jpg    # Related product image
```

## Responsive Behavior

- Above `1200px`: full desktop header and two-column product layout.
- At `1200px` and below: tighter header, gallery, and product-information spacing; feature tiles use two columns.
- At `900px` and below: navigation is hidden and the product and lower content sections stack vertically.
- At `620px` and below: search is hidden, thumbnails scroll horizontally, the main image is shorter, action buttons and trust items stack, and details tabs can scroll horizontally.

## Run Locally

Open `index.html` directly in a browser, or serve the project directory with any static server:

```bash
cd 28-ecommerce-product-details
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Implementation Notes

- No external dependencies or build tools are required.
- Product and related-product data is hard-coded in the HTML.
- The gallery uses `object-fit: cover`, so source images with different aspect ratios are cropped to fit the display areas.
- The selected color label remains `Olive Green`; swatches currently change only the visual selection state.
