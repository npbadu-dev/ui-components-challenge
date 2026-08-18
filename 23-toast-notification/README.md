# Toast Notification Component

A beautiful and versatile toast notification system showcasing multiple notification types with visual feedback, progress indicators, and clean UI design.

## 🎨 Features

- **Multiple Notification Types**: Success, Warning, Error, Info, Promo/Special Offer, and Custom notifications
- **Color-Coded Alerts**: Each notification type has its own distinct color scheme for quick visual identification
- **Progress Indicator**: Animated progress bar at the bottom of each notification showing auto-dismiss timing
- **Icon Integration**: Font Awesome icons for each notification type
- **Interactive Close Button**: Dismiss button (X icon) in the top-right corner of each notification
- **Clean Layout**: Two-column design with trigger buttons on the left and preview cards on the right
- **Smooth Animations**: Hover effects and transitions for enhanced user experience
- **Responsive Design**: Flexible grid and spacing that adapts to different screen sizes

## 📁 File Structure

```
23-toast-notification/
├── index.html          # HTML markup for the toast component
├── style.css           # Styling and layout
├── script.js           # JavaScript functionality (ready for implementation)
└── README.md           # Documentation
```

## 🏗️ Component Architecture

### Layout Structure

The component uses a two-column flex layout:

- **Left Column**: Description text, trigger buttons, and information card
- **Right Column**: Preview cards displaying different toast notification types

### Left Side Components

#### Header Section

- **Title**: "Toast Notification" (green, uppercase)
- **Main Heading**: "Beautiful, Clear"
- **Sub-heading**: "Feedback" (in secondary green)
- **Description**: Explains the purpose of toast notifications

#### Trigger Card

- **Card Title**: "Trigger Toast"
- **Card Description**: Instructions for interacting with the component
- **Button Grid**: 6 buttons arranged in 2 rows × 3 columns
  - Row 1: Success, Warning, Error buttons
  - Row 2: Info, Promo, Custom buttons
  - Each button has an icon and text label

#### Information Card

- **Icon**: Lightbulb icon (Font Awesome)
- **Title**: "How it works"
- **Description**: Explains that toasts appear at the top-right and disappear automatically

### Right Side Components

#### Toast Notification Cards

Six preview cards representing different notification types:

1. **Success Toast**
   - Icon: Check circle (green)
   - Title: "Success!"
   - Message: "Your changes have been saved successfully."
   - Color: #719b1c (Green)
   - Progress: 55%

2. **Warning Toast**
   - Icon: Circle exclamation (orange)
   - Title: "Warning!"
   - Message: "Please check your input before continuing."
   - Color: #f2ad16 (Orange)
   - Progress: 45%

3. **Error Toast**
   - Icon: Circle X mark (red)
   - Title: "Error!"
   - Message: "Something went wrong. Please try again."
   - Color: #ef3333 (Red)
   - Progress: 85%

4. **Info Toast**
   - Icon: Circle exclamation rotated (blue)
   - Title: "Information"
   - Message: "Here's some important information for you."
   - Color: #2683d9 (Blue)
   - Progress: 75%

5. **Special Offer/Promo Toast**
   - Icon: Gift icon (purple)
   - Title: "Special Offer!"
   - Message: "Get 20% off on all products this weekend!"
   - Color: #8855d5 (Purple)
   - Progress: 92%

6. **Custom Toast**
   - Icon: Leaf icon (gray)
   - Title: "Stay Healthy!"
   - Message: "Don't forget to take your daily workout."
   - Color: #777 (Gray)
   - Progress: 64%

## 🎯 HTML Structure

### Trigger Buttons

```html
<button class="btn success">
  <i class="fa-regular fa-circle-check"></i>
  <span>Success</span>
</button>
```

### Toast Card Structure

```html
<div class="card success-card">
  <div class="right-card-icon-box success-box">
    <i class="fa-regular fa-circle-check"></i>
  </div>
  <div class="right-card-text-box">
    <p class="right-card-title">Success!</p>
    <p class="right-card-desc">Your changes have been saved successfully.</p>
    <i class="fa-solid fa-xmark"></i>
  </div>
</div>
```

## 🎨 CSS Design Details

### Color Palette

| Type       | Color       | RGB Value           |
| ---------- | ----------- | ------------------- |
| Success    | Green       | #719b1c, #92a56a    |
| Warning    | Orange      | #f2ad16             |
| Error      | Red         | #ef3333             |
| Info       | Blue        | #2683d9             |
| Promo      | Purple      | #8855d5, blueviolet |
| Custom     | Gray        | #777                |
| Background | Light Cream | #f9f8f5             |
| Text       | Dark Gray   | #555, #333          |

### CSS Variables Used

Each card uses CSS custom properties for theme management:

```css
.card {
  --color: #92a56a; /* Base color */
  --progress: 45%; /* Progress bar width */
}
```

### Card Styling

- **Width & Padding**: 100% with 2rem top/bottom padding and 8rem/2rem left/right padding
- **Box Shadow**: `0 0 10px 2px rgba(0, 0, 0, 0.1)`
- **Border Radius**: 8px rounded corners
- **Layout**: Flex with gap of 3rem between icon and content

### Progress Bar Implementation

Uses CSS pseudo-elements:

- **::before**: Full width background bar (#e7ecd8)
- **::after**: Animated progress bar (colored, width = `--progress` variable)
- **Height**: 3px at the bottom of card
- **Effect**: Creates a visual timer effect

### Button Styles

- **Size**: 150px width × 12px × 18px padding
- **Background**: Semi-transparent color (opacity: 0.1)
- **Border**: 2px colored outline
- **Gap**: 1.4rem between icon and text
- **Hover**: `translateY(-2px)` upward movement
- **Active**: `translateY(2px)` downward movement
- **Transition**: 0.2s ease-in

### Icons

- **Font Awesome 6.7.2** provides all icons
- **Icon Sizes**: 2.2rem for toast icons, 1.6rem for buttons, 1.8rem for close button
- **Special Rotation**: Exclamation mark rotated 180° for Info notifications (`.rotate-excl`)

## ✨ Interactive Elements

### Close Button (X Icon)

- **Position**: Absolute, top-right of each card
- **Styling**: Gray (#777), changes to darker gray on hover
- **Behavior**: Clickable to dismiss the notification
- **Cursor**: Pointer on hover

### Trigger Buttons

- **Visual Feedback**: Color-coded borders and backgrounds
- **Hover Effect**: Slight upward movement (transform: translateY(-2px))
- **Active State**: Downward movement (transform: translateY(2px))
- **Smooth Transitions**: All 0.2s ease-in

### Card Hover Effects

- **Icon Background**: Semi-transparent color matching the notification type
- **Text Color**: Matches the notification type color scheme

## 📐 Layout Specifications

### Container Layout

```css
.main-container {
  margin: 9rem;
}

.container {
  display: flex;
  gap: 12rem;
}
```

### Grid for Button Arrangement

```css
.btn-group {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.btn-row1 {
  display: flex;
  gap: 4rem;
  align-items: center;
}
```

### Card Container

```css
.popup-card-box {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
```

## 🎬 How to Use

1. **Open the Component**: Open `index.html` in a web browser
2. **View Toast Types**: See different toast notification styles on the right side
3. **Interactive Buttons**: Click trigger buttons on the left to simulate toast notifications (requires JavaScript implementation)
4. **Close Notifications**: Click the X button on any toast card to dismiss it
5. **Observe Styling**: Notice color-coding, progress bars, and icon usage for each notification type

## 🛠️ Dependencies

- **Font Awesome 6.7.2**: For notification and icon elements
  - Link: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css`
  - Icons used:
    - `fa-circle-check` (Success)
    - `fa-circle-exclamation` (Warning/Info)
    - `fa-circle-xmark` (Error)
    - `fa-gift` (Promo)
    - `fa-leaf` (Custom)
    - `fa-xmark` (Close button)
    - `fa-lightbulb` (Information card)

## 🚀 JavaScript Implementation

Currently, `script.js` is empty and ready for implementation. Suggested features:

- **Toast Generator**: Function to create and display new toast notifications
- **Auto-Dismiss**: Automatically hide toasts after a set duration
- **Progress Animation**: Animate the progress bar width over time
- **Button Click Handlers**: Trigger different toast types when buttons are clicked
- **Close Functionality**: Remove toasts when close button is clicked
- **Queue Management**: Handle multiple toasts appearing simultaneously
- **Position Management**: Stack toasts if multiple appear at once
- **Accessibility**: ARIA labels and keyboard navigation support

### Example JavaScript Structure

```javascript
class Toast {
  constructor(message, type = "success", duration = 5000) {
    this.message = message;
    this.type = type;
    this.duration = duration;
  }

  show() {
    // Create and display toast
  }

  dismiss() {
    // Remove toast from DOM
  }

  animateProgress() {
    // Animate the progress bar
  }
}
```

## 🎯 Use Cases

- Form submission feedback (success/error)
- Warning messages for user actions
- Information alerts for system updates
- Promotional announcements
- Action confirmations
- Status notifications
- Error reporting
- Achievement notifications

## 💡 Customization Tips

1. **Add New Notification Types**: Create new CSS classes with unique `--color` variable
2. **Change Colors**: Modify hex color values for different themes
3. **Adjust Progress Duration**: Modify `--progress` percentage for different timing
4. **Add Icons**: Replace Font Awesome icons with custom icons or emojis
5. **Position Adjustment**: Change `top-right` to `top-left`, `bottom-right`, etc.
6. **Animation Effects**: Add CSS animations like `slideIn`, `fadeIn`, or `bounce`
7. **Sound Effects**: Add audio feedback using JavaScript

## 📝 CSS Classes Reference

| Class                                                       | Purpose                          |
| ----------------------------------------------------------- | -------------------------------- |
| `.main-container`                                           | Main wrapper with margin         |
| `.container`                                                | Two-column flex layout           |
| `.left-side`                                                | Trigger buttons and info section |
| `.right-side`                                               | Toast preview cards              |
| `.toast-card`                                               | Trigger button container         |
| `.btn`                                                      | Base button styling              |
| `.success`, `.warn`, `.error`, `.info`, `.promo`, `.custom` | Button type variants             |
| `.card`                                                     | Base toast card styling          |
| `.success-card`, `.warning-card`, etc.                      | Toast type variants              |
| `.right-card-text-box`                                      | Toast message container          |
| `.right-card-icon-box`                                      | Toast icon container             |

## 📱 Responsive Design

Current design uses fixed units (rem) with:

- `html` font-size: `62.5%`
- Main margin: `9rem` (144px)
- Large gap between columns: `12rem`

For mobile adaptation, consider adding media queries:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 2rem;
  }

  .main-container {
    margin: 2rem;
  }
}
```

## 🔄 Toast States

1. **Appearing**: Animation as notification enters (not yet implemented)
2. **Active**: Visible with progress bar animating
3. **Hovering**: Interactive state showing cursor feedback
4. **Dismissing**: Animation as notification exits (not yet implemented)
5. **Dismissed**: Removed from DOM

## ✅ Notes

- Font size is based on `62.5%` base calculation (1rem = 10px)
- All icons are from Font Awesome 6.7.2
- Progress bars are visualized at different percentages to show varying urgency/timing
- Close buttons are always positioned at top-right of notifications
- Color consistency between trigger buttons and toast preview cards
- Semi-transparent backgrounds for better visual hierarchy
- Smooth transitions for all interactive elements
