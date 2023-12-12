const images = [
  { src: "image1.jpg", alt: "Image 1" },
  { src: "image2.jpg", alt: "Image 2" },
  { src: "image3.jpg", alt: "Image 3" },
];

const galleryContainer = document.querySelector(".gallery");
let galleryHTML = "";

images.forEach((image) => {
  galleryHTML += `
      <li class="gallery-item">
        <img src="${image.src}" alt="${image.alt}">
      </li>
    `;
});

galleryContainer.insertAdjacentHTML("beforeend", galleryHTML);
