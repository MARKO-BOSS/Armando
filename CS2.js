let imageState = 0;

function changeImage(element, newSrc, originalSrc) {
  if (imageState === 0) {
    element.src = newSrc;
    imageState = 1;
  } else {
    element.src = originalSrc;
    imageState = 0;
  }
}