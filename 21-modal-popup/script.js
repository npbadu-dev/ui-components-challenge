const modalOverlay = document.getElementById("modalOverlay");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-modal");
const continueShopBtn = document.querySelector(".continue-shop");

const closeModal = () => {
  modalOverlay.classList.remove("active");
  modalOverlay.setAttribute("aria-hidden", "true");
};

const openModal = () => {
  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
continueShopBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});
