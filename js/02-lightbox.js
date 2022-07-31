import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const gallery = CreateGalleryMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', gallery)

function CreateGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    ).join('')
}

let gallerySimple = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250})

