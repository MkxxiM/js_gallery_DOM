'use strict';

const gallery = document.querySelector('.gallery__list');
const bigPicture = document.querySelector('.gallery__large-img');
const bigPictureLink = bigPicture.getAttribute('src');

gallery.addEventListener('click', (clickEvent) => {
  const picture = clickEvent.target.closest('.gallery__img');
  const pictureLink = picture.getAttribute('src');

  const temp = bigPictureLink;

  bigPicture.setAttribute('src', pictureLink);
  picture.setAttribute('src', temp);
});
