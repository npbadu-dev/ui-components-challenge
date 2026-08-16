# 20 - Tabs Component

A fully functional, interactive tabbed interface component showcasing a modern dashboard-style layout. This component demonstrates DOM manipulation, event handling, and responsive design patterns.

## 🎯 Component Overview

The Tabs Component is a reusable UI element that allows users to switch between different sections of content. It features a navigation bar with four distinct tabs (Home, Profile, Messages, Settings), each with its own unique content panel that displays relevant information when activated.

**Brand**: PixelFit

## ✨ Features

- **Interactive Tab Navigation**: Click on any tab to instantly switch content panels
- **Four Tab Sections**:
  - **Home**: Dashboard overview with activity statistics
  - **Profile**: User information and profile management
  - **Messages**: Message list with conversation preview
  - **Settings**: Configurable preferences with toggle switches
- **Smooth Animations**: Fade-in effect when switching tabs
- **Icon Integration**: Font Awesome icons for visual context
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Active State Indicators**: Visual underline shows the currently active tab
- **Hover Effects**: Interactive feedback for better UX
- **Clean, Modern UI**: Professional design with custom color scheme

## 📁 File Structure

```
20-tabs-component/
├── index.html      # Main HTML structure
├── style.css       # Complete styling and responsive rules
├── script.js       # Tab switching logic
└── README.md       # This file
```

## 📋 HTML Structure

### Tab Navigation

The component includes four navigation buttons with Font Awesome icons:

- 🏠 Home
- 👤 Profile
- 💬 Messages
- ⚙️ Settings

### Content Panels

#### Home Panel

Displays a welcome message and three statistics cards:

- Activities counter
- Notifications count
- Tasks count

#### Profile Panel

Shows user information in a profile card:

- User avatar with initials
- Name: Nitesh Badu
- Email: nitesh@example.com
- Location: Kathmandu, Nepal
- Edit Profile button

#### Messages Panel

Contains a list of messages with:

- Message sender avatars
- Sender names
- Message timestamps
- Message preview text
- View All Messages button

#### Settings Panel

Provides configurable options:

- Notifications toggle (enabled by default)
- Dark Mode toggle
- Privacy settings button
- Save Changes button

## 🎨 Styling Details

### Color Scheme

- **Primary Color**: `#6b7f00` (Olive Green) - Used for active states and accents
- **Light Background**: `#efffa3` (Light Yellow) - Page background
- **White**: `#ffffff` - Container background
- **Text Dark**: `#1f2933` - Primary text
- **Text Gray**: `#6b7280` - Secondary text
- **Border Color**: `#e5e7eb` - Light borders
- **Accent Light**: `#f5fbd5` - Light backgrounds for icons

### Key CSS Classes

| Class               | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `.tabs-container`   | Main wrapper with shadow and rounded corners |
| `.tabs-nav`         | Navigation bar container                     |
| `.tab`              | Individual tab button                        |
| `.tab.active`       | Active tab state with underline              |
| `.tabs-content`     | Content area wrapper                         |
| `.tab-panel`        | Individual content panel                     |
| `.tab-panel.active` | Visible panel with animation                 |
| `.panel-header`     | Section header with icon and title           |
| `.stat-card`        | Statistics display card                      |
| `.profile-info`     | Profile information container                |
| `.messages-list`    | Messages list wrapper                        |
| `.settings-list`    | Settings options wrapper                     |
| `.switch`           | Toggle switch for settings                   |

### Responsive Breakpoints

The component includes mobile optimization at screens **≤ 700px**:

- Reduced padding and spacing
- Single-column layout for statistics
- Flexible font sizes
- Horizontal scrollable tab navigation
- Adjusted icon sizes
- Stack-layout for profile information

## 🔧 JavaScript Functionality

### Tab Switching Logic

The `script.js` file implements a straightforward tab switching system:

```javascript
1. Select all tab buttons and content panels
2. Attach click event listener to each tab
3. On tab click:
   - Remove 'active' class from all tabs
   - Add 'active' class to clicked tab
   - Remove 'active' class from all panels
   - Show matching panel based on data-tab attribute
```

### How It Works

- Each tab button has a `data-tab` attribute (e.g., `data-tab="home"`)
- Each content panel has a matching `data-content` attribute (e.g., `data-content="home"`)
- Clicking a tab finds and activates the corresponding panel
- The CSS `.active` class controls visibility and animation

## 💻 How to Use

### Basic Implementation

1. Open `index.html` in your browser
2. Click on any tab to switch between sections
3. Observe the content change with a smooth fade-in animation
4. Active tab is indicated with an underline and color change

### Customization Options

#### Changing Colors

Modify the CSS variables in `style.css`:

```css
--primary-color: #6b7f00; /* Change primary accent color */
--bg-light: #efffa3; /* Change background color */
```

#### Adding More Tabs

1. Add a new button in `.tabs-nav`:

```html
<button class="tab" data-tab="newtab">
  <i class="fa-solid fa-icon"></i>
  <span>New Tab</span>
</button>
```

2. Add a new panel in `.tabs-content`:

```html
<div class="tab-panel" data-content="newtab">
  <!-- Your content here -->
</div>
```

3. The JavaScript will automatically handle the switching

#### Modifying Tab Content

Edit the HTML within each `.tab-panel` div to customize:

- Text content
- Icon types (from Font Awesome)
- Cards and sections
- Buttons and interactions

## 🎬 Animation Details

### Fade-In Animation

When a new tab panel becomes active, it smoothly fades in over 0.25 seconds:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Hover Transitions

All interactive elements feature smooth color transitions (0.25s ease):

- Tab buttons change color on hover
- Buttons scale up slightly on hover
- Toggle switches animate smoothly

## 📱 Responsive Behavior

### Desktop (> 700px)

- Full-width navigation bar
- Three-column statistics grid
- Large panel icons (70px)
- Optimal spacing and padding

### Mobile (≤ 700px)

- Horizontal scrollable tab navigation
- Single-column statistics
- Smaller icons (55px)
- Reduced padding
- Stack-based layouts
- Optimized typography

## 🌐 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Modern mobile browsers

**Note**: Requires support for:

- CSS Flexbox & Grid
- CSS Transitions & Animations
- ES6 JavaScript (const, arrow functions, template literals)
- DOM QuerySelector API

## 🛠️ External Dependencies

- **Font Awesome**: Icon library (CDN link included)
  - Version: 6.7.2
  - Used for tab and section icons

## 📌 Key Components Breakdown

### Statistics Section

- Grid-based layout showing numerical data
- Card design with borders and background
- Large, bold numbers with descriptive labels

### Profile Section

- Circular avatar with user initials
- Information rows with labels and values
- Interactive edit button

### Messages Section

- List of message threads
- Avatar thumbnails with initials
- Message preview with timestamps
- Call-to-action button

### Settings Section

- List of togglable settings
- Custom toggle switch component
- Settings with descriptions
- Arrow button for sub-menus

## 💡 Use Cases

- **User Dashboards**: Display different sections of user data
- **Admin Panels**: Organize settings and management tools
- **Profile Pages**: Show profile, messages, and settings in tabs
- **SaaS Applications**: Tab-based interface for feature organization
- **Settings Menus**: Group related options into logical tabs

## 🚀 Performance Considerations

- Lightweight: Pure HTML, CSS, and vanilla JavaScript
- No framework dependencies
- Minimal DOM manipulation
- Efficient event delegation possible for many tabs
- CSS animations are GPU-accelerated

## 📝 Notes

- The component uses semantic HTML5 structure
- CSS is organized with clear section comments
- JavaScript is straightforward and easy to understand/modify
- All styles are scoped to avoid conflicts
- Responsive design is mobile-first approach

## 🎓 Learning Outcomes

This component demonstrates:

- DOM element selection and manipulation
- Event listener implementation
- CSS class toggling for state management
- Responsive design techniques
- CSS animations and transitions
- Flexbox and Grid layouts
- Icon library integration
- Semantic HTML structure

---

**Created as part of the UI Components Challenge**  
A practical exercise in building reusable, professional UI components with vanilla web technologies.
