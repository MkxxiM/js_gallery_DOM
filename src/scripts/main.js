'use strict';

const gallery = document.querySelector('.gallery__list');
const bigPicture = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (clickEvent) => {
  const picture = clickEvent.target.closest('.gallery__img');

  if (!picture) {
    return null;
  } else {
    const pictureLink = picture.getAttribute('src');

    bigPicture.setAttribute('src', pictureLink);
  }
});
