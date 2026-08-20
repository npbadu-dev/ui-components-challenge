const form = document.getElementById("membershipForm");
const steps = document.querySelectorAll(".form-step");
const indicators = document.querySelectorAll(".step-indicator");
const progressLine = document.getElementById("progressLine");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

const successMessage = document.getElementById("successMessage");

let currentStep = 0;

// -------------------------
// Show current step
// -------------------------

function showStep(step) {
  steps.forEach((item, index) => {
    item.classList.toggle("active", index === step);
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.remove("active", "completed");

    if (index < step) {
      indicator.classList.add("completed");
    }

    if (index === step) {
      indicator.classList.add("active");
    }
  });

  // Progress line
  const progress = (step / (steps.length - 1)) * 80;
  progressLine.style.width = progress + "%";

  // Back button
  backBtn.style.visibility = step === 0 ? "hidden" : "visible";

  // Next / Submit
  if (step === steps.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";

    updateReview();
  } else {
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// -------------------------
// Validation
// -------------------------

function validateStep() {
  let valid = true;

  // Step 1
  if (currentStep === 0) {
    const requiredFields = ["firstName", "lastName", "email", "phone", "dob"];

    requiredFields.forEach((id) => {
      const input = document.getElementById(id);
      const error = input.nextElementSibling;

      if (!input.value.trim()) {
        input.classList.add("error");
        error.classList.add("show");
        valid = false;
      } else {
        input.classList.remove("error");
        error.classList.remove("show");
      }
    });

    // Email validation
    const email = document.getElementById("email");

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("error");
      email.nextElementSibling.classList.add("show");
      valid = false;
    }
  }

  // Step 2
  if (currentStep === 1) {
    const plan = document.querySelector('input[name="plan"]:checked');

    if (!plan) {
      alert("Please select a membership plan.");
      valid = false;
    }

    const startDate = document.getElementById("startDate");
    const payment = document.getElementById("payment");

    if (!startDate.value) {
      startDate.classList.add("error");
      startDate.nextElementSibling.classList.add("show");
      valid = false;
    } else {
      startDate.classList.remove("error");
      startDate.nextElementSibling.classList.remove("show");
    }

    if (!payment.value) {
      payment.classList.add("error");
      payment.nextElementSibling.classList.add("show");
      valid = false;
    } else {
      payment.classList.remove("error");
      payment.nextElementSibling.classList.remove("show");
    }
  }

  // Step 3
  if (currentStep === 2) {
    const terms = document.getElementById("terms");

    if (!terms.checked) {
      alert("Please agree to the membership terms and conditions.");
      valid = false;
    }
  }

  return valid;
}

// -------------------------
// Next
// -------------------------

nextBtn.addEventListener("click", () => {
  if (!validateStep()) {
    return;
  }

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

// -------------------------
// Back
// -------------------------

backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// -------------------------
// Review information
// -------------------------

function updateReview() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const plan = document.querySelector('input[name="plan"]:checked');

  document.getElementById("reviewName").textContent =
    `${firstName} ${lastName}`;

  document.getElementById("reviewEmail").textContent =
    document.getElementById("email").value;

  document.getElementById("reviewPhone").textContent =
    document.getElementById("phone").value;

  document.getElementById("reviewDob").textContent =
    document.getElementById("dob").value || "—";

  document.getElementById("reviewPlan").textContent = plan ? plan.value : "—";

  document.getElementById("reviewStart").textContent =
    document.getElementById("startDate").value || "—";

  document.getElementById("reviewPayment").textContent =
    document.getElementById("payment").value || "—";

  document.getElementById("reviewLevel").textContent =
    document.getElementById("fitnessLevel").value || "—";

  document.getElementById("reviewGoal").textContent =
    document.getElementById("goal").value || "—";
}

// -------------------------
// Submit
// -------------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateStep()) {
    return;
  }

  form.style.display = "none";

  document.querySelector(".progress-area").style.display = "none";

  successMessage.classList.add("show");
});

// -------------------------
// Remove errors while typing
// -------------------------

document.querySelectorAll("input, select, textarea").forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error");

    const error = input.nextElementSibling;

    if (error && error.classList.contains("error-message")) {
      error.classList.remove("show");
    }
  });
});

// Initial state
showStep(currentStep);
