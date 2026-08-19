# User Profile Card

A modern, interactive user profile card component that displays professional information with social media integration and experience statistics.

## Overview

This component is a polished profile card UI element commonly used in team pages, portfolios, and professional networking platforms. It features a clean layout with smooth animations and interactive elements that engage users.

## Features

- **Profile Display**: Circular profile image with hover scaling effect
- **User Information**: Name, professional role, and descriptive text
- **Social Media Links**: Quick access buttons for GitHub, Twitter, LinkedIn, and Email
- **Experience Statistics**: Display key metrics (Projects, Followers, Years of Experience)
- **Interactive Elements**: Smooth transitions and hover effects on all interactive elements
- **Professional Styling**: Modern design with proper spacing and typography
- **Responsive Layout**: Centered card design using Flexbox

## File Structure

```
25-user-profile-card/
├── index.html          # HTML markup for the profile card
├── style.css           # All styling and animations
├── script.js           # JavaScript file (currently empty, ready for enhancements)
├── assets/
│   └── profile.png     # Profile image asset
└── README.md           # This file
```

## Components

### HTML Structure
- **Main Container**: Flexbox wrapper for centering the card
- **Profile Card**: Container holding all profile elements
- **Image Box**: Circular container for the profile image
- **Details Section**: Name, role, and description
- **Social Media**: Icons linked to external profiles
- **Experience**: Statistics displayed in three columns
- **Action Button**: Call-to-action button with icon

### CSS Styling

**Color Scheme**:
- Background: Light cream (#f9f8f5)
- Card Background: White (#fff)
- Text: Dark gray and blue accents
- Accent Color: Blue (rgba(0, 0, 255, ...))

**Key Classes**:
- `.profile-card`: Main card container with shadow and border-radius
- `.profile-img`: Circular image with hover scale effect
- `.social-icon`: Icon buttons with hover lift effect
- `.experience`: Statistics section with column layout
- `button`: Call-to-action button with interactive states

## Interactivity

### Profile Image
- Hover: Scales up to 1.2x
- Active: Scales down to 0.8x
- Box shadow for depth effect

### Social Icons
- Hover: Lifts up (-2px translateY) with enhanced shadow
- Active: Pushes down (+2px translateY)
- Smooth color transitions

### Button
- Hover: Lifts up (-2px translateY), darker blue background, enhanced shadow
- Active: Pushes down (+2px translateY)
- Full-width design with icon and text

## Typography

- **Font Family**: Courier New, monospace
- **Name**: 2.8rem, font-weight 600
- **Role**: 2rem, blue, font-weight 600
- **Description**: 1.4rem, gray text
- **Statistics**: 2rem for numbers, 1.4rem for labels
- **Button**: 1.6rem, font-weight 600

## External Dependencies

- **Font Awesome 6.7.2**: Icon library for social media and action icons
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css`

## Layout Details

- **Card Padding**: 4rem horizontal, 5rem vertical
- **Image Size**: 150px × 150px circular
- **Margin**: 8rem top and bottom for the main container
- **Gap Spacing**: Varies by section (2rem for social, 3rem for experience columns)
- **Border Radius**: 12px for card, 50% for circular elements

## Usage

1. Open `index.html` in a web browser
2. The profile card displays centered on the page
3. Hover over any interactive element to see smooth animations
4. Click social media icons to visit external profiles
5. Click "View Profile" button for further action (currently unlinked)

## Responsive Design

- Uses responsive units (rem) based on root font-size (62.5%)
- Flexbox for flexible layout
- Maintains proper spacing across viewport sizes
- Text scaling based on viewport width

## Enhancement Opportunities

1. **JavaScript**: Add profile card filtering, animations, or dynamic data loading
2. **Modal**: Implement modal popup when clicking "View Profile" button
3. **Animation**: Add entrance animations when card loads
4. **Data Integration**: Connect to backend API for dynamic profile data
5. **Accessibility**: Add ARIA labels and keyboard navigation
6. **Mobile Optimization**: Adjust padding and spacing for smaller screens
7. **Dark Mode**: Add theme toggle functionality
8. **Image Upload**: Allow users to update their profile picture

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Requires modern CSS3 support for transitions and transforms

## Color Palette

| Element | Color | Hex Value |
|---------|-------|-----------|
| Background | Light Cream | #f9f8f5 |
| Card Background | White | #fff |
| Primary Text | Dark Gray | #555 |
| Secondary Text | Medium Gray | #777 |
| Accent | Blue | rgba(0, 0, 255, ...) |
| Borders | Light Gray | #ccc |
| Shadows | Black (transparent) | rgba(0, 0, 0, 0.1-0.22) |

## Notes

- The profile image path is `assets/profile.png` - ensure this file exists in the assets folder
- Social media links are currently hardcoded with example URLs
- The Twitter link in the HTML is a placeholder (#) without a URL
- Font size is calculated using the REM unit system (base: 62.5% = 10px)
- The card maintains proper aspect ratio and centered positioning

## Created By

This component was created as part of the UI Components Challenge series.
