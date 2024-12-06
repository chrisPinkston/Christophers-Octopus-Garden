document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector('.gallery-container');

    // Assuming your paintings are named as painting1.jpg, painting2.jpg, etc.
    for (let i = 1; i <= 20; i++) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const imgElement = document.createElement('img');
        imgElement.src = `PraiseJesus/painting${i}.jpg`;
        // imgElement.alt = `Painting ${i}`;

        imageContainer.appendChild(imgElement);
        galleryContainer.appendChild(imageContainer);
    }
})

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  // Toggle visibility of the menu
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
});

const galleryMobileMenu = document.querySelector('.gallery-mobile-menu');

menuToggle.addEventListener('click', () => {
  // Toggle visibility of the menu
  if (galleryMobileMenu.style.display === 'block') {
    galleryMobileMenu.style.display = 'none';
  } else {
    galleryMobileMenu.style.display = 'block';
  }
});