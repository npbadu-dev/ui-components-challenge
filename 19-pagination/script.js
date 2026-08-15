const pagination = document.querySelector(".pagination");
const totalPages = 20;
let currentPage = 10;

function createNavButton(direction) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "cursor navigate";
  button.setAttribute(
    "aria-label",
    direction === "prev" ? "Previous page" : "Next page",
  );
  button.innerHTML = `<i class="fa-solid fa-chevron-${
    direction === "prev" ? "left" : "right"
  }"></i>`;

  button.addEventListener("click", () => {
    if (direction === "prev") {
      currentPage = Math.max(1, currentPage - 1);
    } else {
      currentPage = Math.min(totalPages, currentPage + 1);
    }

    renderPagination();
  });

  return button;
}

function createNumberButton(page, isActive) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = page;
  button.className = `pg cursor ${isActive ? "active" : "pg-more"}`;
  button.setAttribute("aria-label", `Go to page ${page}`);

  button.addEventListener("click", () => {
    currentPage = page;
    renderPagination();
  });

  return button;
}

function createEllipsis() {
  const ellipsis = document.createElement("span");
  ellipsis.className = "pg pg-dot cursor";
  ellipsis.setAttribute("aria-hidden", "true");
  ellipsis.textContent = "...";
  return ellipsis;
}

function getVisiblePages() {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, "ellipsis", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      2,
      "ellipsis",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    2,
    3,
    4,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages - 1,
    totalPages,
  ];
}

function renderPagination() {
  pagination.innerHTML = "";

  const prevButton = createNavButton("prev");
  prevButton.disabled = currentPage === 1;
  prevButton.classList.toggle("disabled", currentPage === 1);
  pagination.appendChild(prevButton);

  getVisiblePages().forEach((page) => {
    if (page === "ellipsis") {
      pagination.appendChild(createEllipsis());
      return;
    }

    const numberButton = createNumberButton(page, page === currentPage);
    pagination.appendChild(numberButton);
  });

  const nextButton = createNavButton("next");
  nextButton.disabled = currentPage === totalPages;
  nextButton.classList.toggle("disabled", currentPage === totalPages);
  pagination.appendChild(nextButton);
}

renderPagination();
