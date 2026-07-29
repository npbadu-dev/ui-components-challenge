// Changing theme
const themeToggle = document.querySelector(".theme-toggle-btn");
const icon = document.querySelector(".toggle-mode");
const text = themeToggle.querySelector("span");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    // Light theme is active
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    text.textContent = "Light Mode";
  } else {
    // Dark theme is active
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    text.textContent = "Dark Mode";
  }
});

// active or in-active
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Remove this if your links go to real pages

    // Remove active class from all links
    navLinks.forEach((item) => item.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});
