# Interactive Timeline Slider Component

A premium, responsive, and fully customizable timeline slider component built with vanilla JavaScript. It's the perfect solution for showcasing project roadmaps, company history, or educational milestones without any external libraries.

## Features

-   **Pure Vanilla JS:** No dependencies, no bloat. Lightweight and efficient.
-   **Fully Responsive:** Looks great on desktops, tablets, and mobile devices.
-   **Highly Customizable:** Easily change all colors, fonts, and data to match your brand.
-   **Logo Ready:** Includes a simple placeholder to add your own company logo.
-   **Accessible:** Built with semantic HTML and keyboard navigation in mind.

---

## Quick Start

1.  **Copy Files:** Place the `css` and `js` folders into your project directory.
2.  **Add HTML:** Copy the HTML structure from the `index.html` file and paste it into your desired location.
3.  **Link Assets:** Make sure to link to the `style.css` and `scripts.js` files in your main HTML document.

---

## HTML Structure

Copy this entire block into the `<body>` of your page.

```html
<div id="ai-milestone-slider">
    <div class="customer-logo"></div>
    <div class="year-navigation"></div>
    <div class="slider-main-content">
        <div class="slider-viewport">
            <div class="slider-track"></div>
        </div>
        <button class="slider-button prev" aria-label="Previous Slide">&#10094;</button>
        <button class="slider-button next" aria-label="Next Slide">&#10095;</button>
    </div>
</div>
```

---

## Customizing the Data

To change the timeline events, open `js/scripts.js` and edit the `slideData` array at the top of the file. The structure is simple:

```javascript
const slideData = [
    { year: 1950, title: 'The Turing Test', description: 'Your description here.' },
    { year: 1956, title: 'Birth of AI', description: 'Another description.' },
    // Add as many events as you need
];
```

---

## Customizing Appearance

All primary colors and fonts can be changed in **one convenient place** at the top of the `css/style.css` file.

```css
:root {
  --slider-background: #1a1a1a;
  --slider-surface: #111;
  --slider-border-color: #333;
  --slider-text-primary: #e0e0e0;
  --slider-text-secondary: #b0b0b0;
  --slider-text-inactive: #888;
  --slider-button-active-bg: #007bff;
  --slider-button-active-text: #ffffff;
  --slider-arrow-bg: rgba(0, 0, 0, 0.3);
  --slider-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

---

## Adding a Logo

To add your own logo, simply replace the placeholder `div` with your own `<img>` tag inside the `customer-logo` container.

**Example:**
```html
<div class="customer-logo">
    <img src="path/to/your/logo.svg" alt="Your Company Logo">
</div>
```
The logo will be automatically resized to fit the container.

---

## License

This component is for use in unlimited personal and commercial projects. Redistribution or resale of the source code is prohibited.
