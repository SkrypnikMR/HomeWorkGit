import {renderBigPhoto, renderSmallPhotos}from "./photosRender/photoRender"

export const renderPhotos = (data, bigPhoto, smallPhoto) => {
  renderBigPhoto(data[0], bigPhoto);
  renderSmallPhotos(data, smallPhoto);
};
export const changeImage = (event, node) => {
  if (event.target.nodeName === "IMG") {
    node.classList.add("gone");
    event.target.classList.add("came");
    const timeOut = setTimeout(() => {
      node.src = event.target.src;
      node.classList.remove("gone");
      event.target.classList.remove("came");
      clearTimeout(timeOut);
    }, 4000);
    return node.src;
  }
};

export const intrevalChangeImage = (node, data, modalTitle, lastImage) => {
  modalTitle.children[0].children[0].src = lastImage;
  node.classList.remove("hide");
  let photoIndex = 0;
  const interval = setInterval(async () => {
    if (photoIndex + 1 >= data.length) {
      photoIndex = 0;
    }
    modalTitle.children[0].children[0].src = data[photoIndex + 1].urls.regular;
    photoIndex++;
  }, 3000);
  return interval;
};

export const hideModal = (lastInterval, modal) => {
  clearInterval(lastInterval);
  modal.classList.add("hide");
};
