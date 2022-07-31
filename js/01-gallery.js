import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const gallery = CreateGalleryMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', gallery)

function CreateGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('')
}

galleryEl.addEventListener('click', onImgClick)


function onImgClick(evt) {
    evt.preventDefault()

    if (evt.target.nodeName !== "IMG") {
        return
    }

    const originalImg = evt.target.dataset.source
    const modal = basicLightbox.create(`
        <img src="${originalImg}" width="800" height="600">
    `, {
		onShow: (modal) => window.addEventListener('keydown', OnEscPress),
		onClose: (modal) => window.removeEventListener('keydown', OnEscPress)
	})
    modal.show()

    function OnEscPress(evt) {
        const ESC_KEY_CODE = 'Escape'
        if (evt.code === ESC_KEY_CODE) {
            modal.close()
        }
    }
}

