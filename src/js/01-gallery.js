
import { galleryItems } from './gallery-items';


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item =>
    `<li class = "gallery__item">
        <a class = "gallery__link" href="${item.original}"> 
            <img
            class ="gallery__image"
            loading = 'lazy'
            src="${item.preview}" 
            alt="${item.description}"
            />
        </a>
    </li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(''));

const simpleLightbox = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
    captionDelay: 250,
});
