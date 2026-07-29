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
