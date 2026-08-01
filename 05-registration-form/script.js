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
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

function toggleVisibility(input, toggleIcon) {
  if (input.type === "password") {
    input.type = "text";
    toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

togglePassword.addEventListener("click", () => {
  toggleVisibility(password, togglePassword);
});

toggleConfirmPassword.addEventListener("click", () => {
  toggleVisibility(confirmPassword, toggleConfirmPassword);
});
