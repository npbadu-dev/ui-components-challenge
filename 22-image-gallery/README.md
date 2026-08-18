# Image Gallery Component

A modern, responsive image gallery showcasing a curated collection of images with interactive features and category filtering capabilities.

## 🎨 Features

- **Featured Image Display**: Large focal image with scale zoom effect on hover
- **Navigation Controls**: Left/right arrow buttons to navigate through the featured image
- **Category Filtering**: Filter gallery content by categories (All, Products, Lifestyle, Workouts, Accessories)
- **Thumbnail Gallery**: Secondary row of smaller image thumbnails for quick access
- **Interactive Hover Effects**:
  - Images scale up on hover
  - Navigation arrows change appearance on interaction
  - Thumbnail images display a green border highlight when hovered
- **Responsive Grid Layout**: Images arranged in an organized grid structure
- **Professional Styling**: Modern design with a warm cream background and earthy green accents

## 📁 File Structure

```
22-image-gallery/
├── index.html          # HTML markup for the gallery layout
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality (ready for implementation)
├── README.md           # Documentation
└── assests/            # Image assets folder
    ├── img1.jpg
    ├── img2.jpg
    ├── img3.jpg
    ├── img4.jpg
    ├── img5.jpg
    ├── img6.jpg
    └── img7.jpg
```

## 🏗️ Component Structure

### Main Container

The gallery is wrapped in a `.main-container` with centered layout and margin spacing.

### Text Section

- **Title**: "Gallery" (styled in green with uppercase text)
- **Heading**: "Explore Our Collection" (large, bold typography)
- **Description**: Contextual text describing the gallery theme
- **Filter Buttons**: Category navigation buttons for content filtering
  - "All" button (active state, green background)
  - Category buttons (light gray background with shadow)

### Image Grid Section

Divided into two main areas:

1. **Featured Image Area** (`.img-row`)
   - Large image on the left (3 columns wide, spans 3 rows)
   - 6 smaller images arranged on the right (2 columns × 3 rows)
   - Navigation arrows positioned over the featured image

2. **Thumbnail Row** (`.norm-img-row`)
   - Horizontal row of small thumbnail previews
   - One image active by default
   - "+5" indicator for additional images

## 🎯 HTML Markup

### Key Elements

- **Navigation Buttons**:

  ```html
  <button class="all btn">All</button>
  <button class="norm btn">Products</button>
  <!-- More category buttons -->
  ```

- **Featured Image Container**:

  ```html
  <div class="div1">
    <i class="fa-solid fa-chevron-left left-icon icon"></i>
    <img src="assests/img1.jpg" alt="img1" class="img1" />
    <i class="fa-solid fa-chevron-right right-icon icon"></i>
  </div>
  ```

- **Thumbnail Gallery**:
  ```html
  <div class="norm-img-box active">
    <img src="assests/img1.jpg" alt="img 1" class="norm-img-row2" />
  </div>
  ```

## 🎨 CSS Styling Details

### Color Palette

- **Primary Green**: `#6f8610` (active buttons, border accents)
- **Secondary Green**: `#8c9e42` (titles)
- **Background**: `#fff9e0` (warm cream)
- **Text**: `#555` (dark gray descriptions)
- **Neutral**: `#eee` (category buttons background)
- **White**: `#fff` (navigation arrow background)

### Grid Layout

- **Main Grid**: `grid-template-columns: 3fr 1fr 1fr`
- **Rows**: 3 rows with featured image spanning all 3
- **Gap**: 1.2rem between items
- **Border Radius**: 12px (rounded corners on images)

### Interactive Effects

- **Hover Scale**: `scale(1.1)` on images
- **Arrow Button Hover**: Color change to `#777` with white text
- **Button Interaction**: Translate and scale animations
- **Thumbnail Hover**: 2px green border with 5px padding

### Typography

- **Font Family**: "Courier New", Courier, monospace
- **Title**: 1.4rem, uppercase, weight 600
- **Heading**: 2.4rem, weight 600
- **Description**: 1.2rem, gray color

## ✨ Hover Effects & Transitions

```css
/* Image zoom on hover */
.div1:hover .img1 {
  transform: scale(1.1);
}

/* Navigation arrow interaction */
.icon:hover {
  background-color: #777;
  color: #fff;
}

/* Thumbnail highlight */
.hover:hover {
  box-shadow: 0 0 0 2px #6f8610;
  padding: 5px;
}
```

## 🚀 JavaScript Functionality

Currently, `script.js` is ready for implementation. Potential features to add:

- **Navigation**: Implement left/right arrow functionality to cycle through featured images
- **Category Filtering**: Filter gallery images based on selected category
- **Thumbnail Sync**: Update featured image when clicking thumbnails
- **Keyboard Navigation**: Arrow key support for image navigation
- **Lightbox/Modal**: Expand images in a fullscreen lightbox view
- **Lazy Loading**: Optimize image loading for performance

## 📱 Responsive Design

The gallery uses absolute viewport sizing (rem units) with:

- Fixed `html` font-size of `62.5%`
- Generous margins (`10rem 25rem`)
- Scalable grid layout using fractional units

For mobile optimization, add breakpoints:

```css
@media (max-width: 768px) {
  .main-container {
    margin: 2rem 1rem;
  }

  .img-row {
    grid-template-columns: 1fr 1fr;
  }
}
```

## 🎬 How to Use

1. **Open the Component**: Open `index.html` in a web browser
2. **Browse Images**: Hover over any image to see the zoom effect
3. **Navigate**: Click category buttons to filter content (styling ready, functionality pending)
4. **Interact**: Click navigation arrows or thumbnails to change the featured image

## 🛠️ Dependencies

- **Font Awesome 6.7.2**: For navigation arrow icons
  - Link: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css`

## 🎯 Use Cases

- E-commerce product showcases
- Portfolio or photography galleries
- Lifestyle and fitness brand galleries
- Product collections with category filtering
- Image-heavy landing pages

## 💡 Customization Tips

1. **Change Colors**: Modify CSS variables or color values for brand alignment
2. **Adjust Layout**: Modify grid columns and rows for different image arrangements
3. **Add Images**: Replace image paths in `assests/` folder with your own images
4. **Implement Filtering**: Add JavaScript logic to show/hide images by category
5. **Add Animation**: Enhance transitions with CSS animations or JavaScript

## 📝 Notes

- All images should be optimized for web to ensure fast loading
- Consider implementing lazy loading for better performance with many images
- Category buttons have styling ready but require JavaScript implementation for functionality
- The thumbnail row includes a "+5" indicator suggesting more images available
