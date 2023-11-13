const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.main-image img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const src = thumbnail.getAttribute('src');
    const alt = thumbnail.getAttribute('alt');
    mainImage.setAttribute('src', src);
    mainImage.setAttribute('alt', alt);
  });
});