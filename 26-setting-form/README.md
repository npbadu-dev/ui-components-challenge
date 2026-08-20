# 26. Setting Form

A dashboard-style settings page for managing a user profile, account details,
notifications, appearance, and security preferences.

## Preview

The page uses a fixed dark sidebar for navigation and a light settings workspace
with grouped, card-style sections. The profile image is loaded from
`assets/profile.png`.

## Included Sections

- **Profile Information**: profile image, full name, username, bio, location,
  and website fields.
- **Account Settings**: email address, language, phone number, and optional
  phone number fields.
- **Notification Preferences**: email, push, task reminder, and newsletter
  toggles.
- **Appearance**: light, dark, and system theme choices plus color swatches.
- **Security**: password summary, change-password action, and two-factor
  authentication action.

The `Setting` item is highlighted in the sidebar, and the header includes a
`Save Changes` button.

## Files

```text
26-setting-form/
├── index.html       # Page structure and form controls
├── style.css        # Layout, cards, sidebar, controls, and states
├── script.js        # Reserved for future behavior; currently empty
├── README.md        # Component documentation
└── assets/
		└── profile.png  # Profile avatar
```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome 6.7.2 via CDN for icons

## Run Locally

No build step or dependency installation is required. Open `index.html` in a
browser, or serve the repository with any local static server:

```bash
cd 26-setting-form
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Current Behavior

The page is currently a visual component prototype. Native text inputs,
textarea, select controls, radio buttons, and notification checkboxes work as
browser controls. CSS provides hover, focus, active, and checked states for
buttons, theme cards, color swatches, the profile image, and notification
switches.

The following actions are present visually but do not yet have JavaScript
behavior:

- Saving changes
- Editing or replacing the profile image
- Switching between light, dark, and system themes
- Applying the selected accent color
- Changing the password
- Enabling two-factor authentication
- Sidebar navigation links

These behaviors can be added in `script.js` when the component is connected to
an application or backend.

## Notes

- Font Awesome icons require network access because the stylesheet is loaded
  from a CDN.
- Form values are currently provided as placeholders rather than persisted
  values.
- The page does not include a responsive breakpoint, so narrow viewport layouts
  may require additional responsive CSS.
