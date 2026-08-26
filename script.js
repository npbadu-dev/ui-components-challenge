/* ------------------------------------------------------------------
       Component roster.
       `built: true` = the folder + index.html exist and are linked.
       `built: false` = not started yet, card renders as locked (no link).
       Flip a component to `built: true` the day you finish it.
       ------------------------------------------------------------------ */
const components = [
  {
    day: 1,
    slug: "sidebar-navigation",
    title: "Sidebar Navigation",
    desc: "Collapsible side nav with icons, active states, and nested groups.",
    built: true,
  },
  {
    day: 2,
    slug: "top-navigation-bar",
    title: "Top Navigation Bar",
    desc: "Sticky header with logo, links, search, and a mobile toggle.",
    built: true,
  },
  {
    day: 3,
    slug: "hero-section",
    title: "Hero Section",
    desc: "Above-the-fold banner with headline, CTA, and supporting visual.",
    built: true,
  },
  {
    day: 4,
    slug: "login-page",
    title: "Login Form",
    desc: "Email and password form with validation and social auth buttons.",
    built: true,
  },
  {
    day: 5,
    slug: "registration-form",
    title: "Registration Form",
    desc: "Multi-field signup with live validation and a password-strength meter.",
    built: true,
  },
  {
    day: 6,
    slug: "product-card",
    title: "Product Card",
    desc: "Image, price, rating, and quick-add for a storefront grid.",
    built: true,
  },
  {
    day: 7,
    slug: "pricing-card",
    title: "Pricing Card",
    desc: "Tiered plan comparison with a highlighted recommended plan.",
    built: true,
  },
  {
    day: 8,
    slug: "feature-cards-section",
    title: "Feature Cards Section",
    desc: "Icon-led grid explaining core product capabilities.",
    built: true,
  },
  {
    day: 9,
    slug: "testimonial-section",
    title: "Testimonial Section",
    desc: "Customer quotes with avatar, name, and rating.",
    built: true,
  },
  {
    day: 10,
    slug: "footer",
    title: "Footer",
    desc: "Site-wide footer with link columns, social icons, and legal text.",
    built: true,
  },
  {
    day: 11,
    slug: "faq-accordion",
    title: "FAQ Accordion",
    desc: "Expand and collapse question list with keyboard support.",
    built: true,
  },
  {
    day: 12,
    slug: "contact-form",
    title: "Contact Form",
    desc: "Name, email, and message fields with inline validation.",
    built: true,
  },
  {
    day: 13,
    slug: "newsletter-subscription",
    title: "Newsletter Subscription",
    desc: "Email capture block with a confirmation state.",
    built: true,
  },
  {
    day: 14,
    slug: "team-members-section",
    title: "Team Members Section",
    desc: "Grid of profile photos, roles, and social links.",
    built: true,
  },
  {
    day: 15,
    slug: "statistics-section",
    title: "Statistics Section",
    desc: "Animated counters for key metrics.",
    built: true,
  },
  {
    day: 16,
    slug: "search-bar",
    title: "Search Bar",
    desc: "Input with icon, live suggestions, and a clear button.",
    built: true,
  },
  {
    day: 17,
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    desc: "Click-triggered menu with full keyboard navigation.",
    built: true,
  },
  {
    day: 18,
    slug: "breadcrumb-navigation",
    title: "Breadcrumb Navigation",
    desc: "Path trail showing current location in a hierarchy.",
    built: true,
  },
  {
    day: 19,
    slug: "pagination",
    title: "Pagination",
    desc: "Page number controls with prev, next, and ellipsis states.",
    built: true,
  },
  {
    day: 20,
    slug: "tabs-component",
    title: "Tabs Component",
    desc: "Switchable content panels with an animated active indicator.",
    built: true,
  },
  {
    day: 21,
    slug: "modal-popup",
    title: "Modal (Popup)",
    desc: "Overlay dialog with focus trap and multiple close controls.",
    built: true,
  },
  {
    day: 22,
    slug: "image-gallery",
    title: "Image Gallery",
    desc: "Grid gallery with a lightbox preview.",
    built: true,
  },
  {
    day: 23,
    slug: "toast-notification",
    title: "Toast Notification",
    desc: "Non-modal alert with auto-dismiss and user interaction.",
    built: true,
  },
  {
    day: 24,
    slug: "bubble",
    title: "Bubble",
    desc: "Displays conversational content in a message bubble",
    built: true,
  },
  {
    day: 25,
    slug: "user-profile-card",
    title: "User Profile Card",
    desc: "Avatar, name, bio, and stats summary.",
    built: true,
  },
  {
    day: 26,
    slug: "setting-form",
    title: "Settings Form",
    desc: "Grouped preference controls with toggles and selects.",
    built: true,
  },
  {
    day: 27,
    slug: "block-card-grid",
    title: "Blog Card Grid",
    desc: "Article previews with image, tag, and excerpt.",
    built: true,
  },
  {
    day: 28,
    slug: "ecommerce-product-details",
    title: "E-commerce Product Details",
    desc: "Full product page with gallery, options, and add-to-cart.",
    built: true,
  },
  {
    day: 29,
    slug: "loader-animation",
    title: "Loader Animation",
    desc: "Visual indicator for loading states.",
    built: true,
  },
  {
    day: 30,
    slug: "multi-step-form",
    title: "Multi-Step Form",
    desc: "Form split into multiple logical steps with progress indication.",
    built: false,
  },
];

const pad = (n) => String(n).padStart(2, "0");
const folderFor = (c) => `${pad(c.day)}-${c.slug}`;

const grid = document.getElementById("cardGrid");
const ticksEl = document.getElementById("ledgerTicks");
const builtCountEl = document.getElementById("builtCount");
const footerCountEl = document.getElementById("footerCount");

function renderTicks() {
  ticksEl.innerHTML = components
    .map((c) => `<span class="tick${c.built ? " is-built" : ""}"></span>`)
    .join("");
}

function renderCounts() {
  const builtCount = components.filter((c) => c.built).length;
  builtCountEl.textContent = pad(builtCount);
  footerCountEl.textContent = `${builtCount} of ${components.length} components shipped`;
}

function renderCards(filter = "all") {
  const items = components.filter((c) => {
    if (filter === "built") return c.built;
    if (filter === "locked") return !c.built;
    return true;
  });

  grid.innerHTML = items
    .map((c) => {
      const folder = folderFor(c);
      const stateClass = c.built ? "is-built" : "is-locked";
      const stampClass = c.built ? "built" : "locked";
      const stampText = c.built ? "Shipped" : "Locked";
      const footText = c.built
        ? `<span>View build</span><span class="arrow">→</span>`
        : `<span>Not built yet</span>`;
      const tag = c.built ? "a" : "div";
      const href = c.built ? `href="${folder}/index.html"` : "";

      return `
            <${tag} class="card ${stateClass}" ${href}>
              <div class="card-top">
                <span class="day-tag">DAY ${pad(c.day)}</span>
                <span class="stamp ${stampClass}">${stampText}</span>
              </div>
              <h3>${c.title}</h3>
              <p>${c.desc}</p>
              <div class="card-foot">${footText}</div>
            </${tag}>
          `;
    })
    .join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderCards(btn.dataset.filter);
  });
});

renderTicks();
renderCounts();
renderCards();
