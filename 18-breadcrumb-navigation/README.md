# Breadcrumb Navigation Component

## Overview

A responsive breadcrumb navigation component that displays the user's current location within a website hierarchy. This component shows a clear path through the site structure (e.g., Home > Shop > Electronics > Wireless Headphones) with visual indicators and interactive hover effects.

## Features

- **Hierarchical Path Display**: Shows navigation hierarchy with visual separators (chevron icons)
- **Icon Integration**: Uses Font Awesome icons to represent different categories
- **Color-Coded States**:
  - Active links (green) for clickable breadcrumb items
  - Grey text for intermediate navigation items
  - Bold dark text for the current/last item
- **Smooth Hover Effects**: Transitions on hover for better user feedback
- **Flexible Layout**: Uses Flexbox for responsive alignment
- **Clean Design**: Subtle box shadow for depth and visual hierarchy

## Component Structure

### HTML Elements

- **Main Container**: `.main-container` - wraps the entire navigation
- **Navigation Bar**: `.nav-bar` - flex container holding breadcrumb elements
- **Breadcrumb Items**: `.el` - individual navigation steps
  - **el-1**: Home (active state)
  - **el-2**: Shop (grey state)
  - **el-3**: Electronics (grey state)
  - **el-4**: Wireless Headphones (current state - no separator)

### Icons Used

- `fa-solid fa-house` - Home icon
- `fa-solid fa-basket-shopping` - Shop/shopping icon
- `fa-solid fa-tv` - Electronics/TV icon
- `fa-solid fa-headphones` - Headphones icon
- `fa-solid fa-chevron-right` - Path separator

## Styling Details

### Color Scheme

| State          | Color        | Hex Code | Usage             |
| -------------- | ------------ | -------- | ----------------- |
| Active         | Yellow-Green | #9aae02  | Clickable links   |
| Hover (Active) | Dark Olive   | #6d781a  | Active link hover |
| Grey           | Dark Grey    | #777     | Inactive items    |
| Hover (Grey)   | Darker Grey  | #333     | Inactive hover    |
| Current        | Near Black   | #111     | Current page      |
| Separator      | Light Grey   | #ccc     | Chevron dividers  |

### Layout

- **Display**: Flexbox with horizontal alignment
- **Gap**: 5rem between elements
- **Padding**: 2.2rem vertical, 4.2rem horizontal
- **Font Size**: 1.8rem (relative to 62.5% base)
- **Box Shadow**: 0 0 10px 2px rgba(0, 0, 0, 0.1) for subtle depth
- **Font Family**: Courier New, monospace

### Transitions

All interactive elements include `0.3s ease-out` color transitions for smooth hover effects.

## Files Included

- **index.html** - Main HTML structure with breadcrumb navigation markup
- **style.css** - Complete styling with color schemes and hover effects
- **script.js** - JavaScript file (currently empty, no dynamic behavior needed)
- **README.md** - Component documentation

## Usage

### Basic Implementation

```html
<div class="main-container">
  <div class="nav-bar">
    <div class="el">
      <i class="fa-solid fa-house active"></i>
      <span class="active">Home</span>
      <i class="fa-solid fa-chevron-right light-grey"></i>
    </div>
    <div class="el">
      <i class="fa-solid fa-basket-shopping"></i>
      <span class="grey">Shop</span>
      <i class="fa-solid fa-chevron-right light-grey"></i>
    </div>
    <div class="el">
      <i class="fa-solid fa-tv"></i>
      <span class="current">Electronics</span>
    </div>
  </div>
</div>
```

### CSS Classes Reference

- `.main-container` - Outer wrapper with margin
- `.nav-bar` - Flex container for breadcrumb items
- `.el` - Individual breadcrumb item container
- `.active` - Style for active/clickable links
- `.grey` - Style for inactive links
- `.current` - Style for current page (no separator)
- `.light-grey` - Style for separator chevrons

## Customization Options

### Change Color Scheme

Modify the following in `style.css`:

- `.active` color: Change #9aae02 to your desired link color
- `.grey` color: Change #777 to your desired inactive color
- `.current` color: Change #111 to your desired current page color

### Adjust Spacing

- `gap: 5rem` - Space between breadcrumb items
- `padding: 2.2rem 4.2rem` - Inner padding of nav bar
- `margin: 10rem` - Outer margin around component

### Modify Font

Replace `font-family: "Courier New", Courier, monospace;` with your preferred font family

## Browser Compatibility

- Modern browsers with CSS Flexbox support
- Font Awesome 6.7.2+ for icon display
- All standard HTML5 elements

## Future Enhancements

- Add JavaScript interactivity for clickable navigation
- Implement dynamic breadcrumb generation based on URL
- Add mobile responsiveness with dropdown on smaller screens
- Include accessibility features (ARIA labels, keyboard navigation)
- Add animation effects for breadcrumb transitions
