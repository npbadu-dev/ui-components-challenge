/*
      Product gallery
    */

const thumbnails = document.querySelectorAll(".thumb");

const mainImage = document.querySelector(".product-stage > img");

let currentImage = 0;

const galleryImages = Array.from(document.querySelectorAll(".thumb img"));

function showImage(index) {
  if (!galleryImages.length) return;

  currentImage = (index + galleryImages.length) % galleryImages.length;

  mainImage.src = galleryImages[currentImage].src;

  mainImage.alt = galleryImages[currentImage].alt;

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle("active", i === currentImage);
  });
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    showImage(index);
  });
});

document.querySelector(".stage-button.prev").addEventListener("click", () => {
  showImage(currentImage - 1);
});

document.querySelector(".stage-button.next").addEventListener("click", () => {
  showImage(currentImage + 1);
});

/*
      Quantity
    */

const quantityValue = document.querySelector(".quantity-value");

document.querySelector(".quantity-minus").addEventListener("click", () => {
  let quantity = parseInt(quantityValue.textContent);

  if (quantity > 1) {
    quantity--;
  }

  quantityValue.textContent = quantity;
});

document.querySelector(".quantity-plus").addEventListener("click", () => {
  let quantity = parseInt(quantityValue.textContent);

  quantity++;

  quantityValue.textContent = quantity;
});

/*
      Color selection
    */

const swatchWrappers = document.querySelectorAll(".swatch-wrap");

swatchWrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    swatchWrappers.forEach((item) => {
      item.classList.remove("selected");
    });

    wrapper.classList.add("selected");
  });
});
