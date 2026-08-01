const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  // Remove classes if the input is empty
  if (email === "") {
    emailInput.classList.remove("valid", "invalid");
    return;
  }

  // Check email validity
  if (emailInput.validity.valid) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  }
});

// password
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    password.type = "password";
    toggle.classList.replace("fa-eye", "fa-eye-slash");
  }
});
