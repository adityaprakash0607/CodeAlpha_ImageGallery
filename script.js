const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryItems = document.querySelectorAll('.gallery-item img');

let currentIndex = 0;

// Open lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

function showImage() {
  lightboxImage.src = galleryItems[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
});

// Filter functionality
const buttons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.gallery-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      const category = item.getAttribute('data-category');
      item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
    });
  });
});
