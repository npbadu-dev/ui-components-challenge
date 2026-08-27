# Multi-Step Form

A responsive, four-step gym membership application for PixelFit. The component is built with plain HTML, CSS, and JavaScript and demonstrates step navigation, client-side validation, progress tracking, and a final review state.

## Features

- Four-step membership application flow:
  1.  Personal information
  2.  Membership selection
  3.  Health and fitness preferences
  4.  Application review
- Progress indicator with active and completed states.
- Back and Next navigation between steps.
- Membership plan selection using Basic, Premium, and Elite cards.
- Required-field validation for personal and membership information.
- Basic email format validation.
- Required membership terms confirmation.
- Live removal of visible validation errors while editing a field.
- Review screen populated from the entered form values.
- Local success message after submission.
- Responsive layout for tablet and mobile screens.

## Project Structure

```text
30-multi-step-form/
|-- index.html    # Form markup and step content
|-- style.css     # Layout, component styles, validation states, and media queries
|-- script.js     # Step navigation, validation, review updates, and submission state
|-- README.md     # Component documentation
```

## Form Steps

### 1. Personal Information

Required fields:

- First name
- Last name
- Email address
- Phone number
- Date of birth

Optional fields include gender and address.

### 2. Membership

The user must choose one of three plans:

- Basic: $25 per month
- Premium: $45 per month
- Elite: $70 per month

The preferred start date and payment method are also required.

### 3. Health and Preferences

Users can optionally provide their fitness level, primary goal, existing injuries or medical conditions, and previous gym experience. They must agree to the membership terms before continuing. The medical consultation acknowledgement is optional.

### 4. Review

The review step displays the entered name, email, phone, date of birth, membership plan, start date, payment method, fitness level, and fitness goal. Missing optional values are shown as an em dash.

## JavaScript Behavior

`script.js` keeps the current step in `currentStep` and uses `showStep()` to:

- Show only the active form step.
- Mark previous indicators as completed.
- Update the orange progress line.
- Show or hide the Back, Next, and Submit buttons.
- Refresh the review values when the review step opens.

`validateStep()` prevents progression when required values are missing. Invalid inputs receive the `error` class and an adjacent error message. Some group-level validation failures use a browser alert for the membership plan and terms checkbox.

Submitting the form is intentionally prevented from making a network request. Instead, the form and progress area are hidden and the success message is displayed.

## Styling and Responsive Behavior

- Uses a warm orange primary color with dark text and white form surfaces.
- Displays the form inside a centered card with a progress header.
- Uses a two-column input grid on larger screens.
- Stacks fields and membership plans into one column below `768px`.
- Hides progress labels below `450px` to preserve space.
- Adds a short fade-in animation when switching steps.

## Run Locally

Open `index.html` directly in a browser, or serve the project directory with any local static server:

```bash
cd 30-multi-step-form
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Scope Notes

This is a front-end interaction demo. It does not persist form data, connect to a payment provider, or submit the application to a server. Refreshing the page resets the form. The success copy refers to FITZONE while the page branding uses PixelFit; update that text if both names are not intentional.
