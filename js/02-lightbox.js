import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

//galleryItems.forEach(({ preview, original, description }) => {
//    const link = document.createElement('a');
//    const imgItem = document.createElement('img');
 //   imgItem.src = preview;
//    imgItem.alt = description;
 //   imgItem.classList.add('gallery__image');
//    link.classList.add('gallery__item');
//    link.href = original;
//    link.append(imgItem);
//    gallery.append(link);
//});

const galList = galleryItems.map(({ preview, original, description }) =>
  `  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join("");
gallery.insertAdjacentHTML('beforeend', galList);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
