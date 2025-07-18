// Array of background image filenames
const sliderImgs = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png"
];

// Select background image element and grid overlay items
const sliderImage = document.querySelector('.background-image');
const sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

// Change slider image every 5 seconds
setInterval(() => {
  changeSliderImage();
}, 5000);

// Function to change the background image with grid animation
const changeSliderImage = () => {
  sliderGrids.forEach((gridItem, index) => {
    setTimeout(() => {
      gridItem.classList.remove('hide');

      setTimeout(() => {
        // After all grid items revealed
        if (index === sliderGrids.length - 1) {
          // Cycle through image list
          currentImage = (currentImage >= sliderImgs.length - 1) ? 0 : currentImage + 1;

          // Change background image
          sliderImage.src = `img/${sliderImgs[currentImage]}`;

          // Hide grid items again one by one
          sliderGrids.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('hide');
            }, i * 100);
          });
        }
      }, 100);
    }, index * 100);
  });
};

// Add scroll event to toggle navbar background
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (scrollY >= 188) {
    navbar.classList.add('bg');
  } else {
    navbar.classList.remove('bg');
  }
});


// Form submit logic
const bookForm = document.querySelector('.book-form');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  alert("Thank you for booking! We'll get in touch with you soon.");
  bookForm.reset();   // This will clear the form fields
});




