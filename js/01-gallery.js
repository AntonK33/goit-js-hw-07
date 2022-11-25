import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const overleyModal = document.querySelector('.modal-overlay');
const imgModal = document.querySelector('.modal');
const imgTag = document.querySelector('.imgTag');

//const image =  document.createElement('img');
galleryItems.forEach(({ preview, original, description }) => {
    const link = document.createElement('a');
    const imgItem = document.createElement('img');
    imgItem.src = preview;
    imgItem.dataSource = original; 
    imgItem.alt = description;
    imgItem.classList.add('gallery__image');
    link.classList.add('gallery__link');
    link.href = original;
    link.append(imgItem);
    gallery.append(link);
});

gallery.addEventListener('click', openModal);
  function  openModal (e)  {
    e.preventDefault();
     if (!e.target.classList.contains("gallery__image")) {
    return;
  }

//const urlOriginal = e.target.dataset.source;
 const instance = basicLightbox.create(
    `
    <div class="modal">
       <img src="${e.target.dataSource}" alt="${e.target.alt}" width="800" height="600">
       <a>Close</a>
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscapeButton);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscapeButton);
      },
    }
  );
  instance.show();
  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
}
console.log(gallery.e)
};
