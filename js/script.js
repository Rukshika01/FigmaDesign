const carouselData = [
  { img: 'image/design2.JPG' },
  { img: 'image/design3.webp' }
];

let index = 0;
const imgEl = document.getElementById('carousel-image');

function updateImageCarousel(i) {
  imgEl.src = carouselData[i].img;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
  index = (index - 1 + carouselData.length) % carouselData.length;
  updateImageCarousel(index);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  index = (index + 1) % carouselData.length;
  updateImageCarousel(index);
});

// Initial load
updateImageCarousel(index);
