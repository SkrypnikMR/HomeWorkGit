import { URL } from "./constants";
import {
  hideModal,
  renderPhotos,
  changeImage,
  intrevalChangeImage,
} from "./render";
import { getRequest } from "./requests";
export const init = async () => {
  const bigPhoto = document.querySelector("#bigPhoto");
  const smallPhoto = document.querySelector("#smallPhoto");
  const intervalButton = document.querySelector("#intervalButton");
  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector("#bigPhotoModal");
  const data = await getRequest(URL);
  const xButton = document.querySelector("#x");
  renderPhotos(data, bigPhoto, smallPhoto);
  const bigImage = document.querySelector("#bigImage");
  let lastImage = bigImage.src;
  smallPhoto.addEventListener(
    "click",
    (event) => (lastImage = changeImage(event, bigImage))
  );
  let lastInterval;
  intervalButton.addEventListener(
    "click",
    (event) =>
      (lastInterval = intrevalChangeImage(modal, data, modalTitle, lastImage))
  );
  xButton.addEventListener("click", (event) => {
    hideModal(lastInterval, modal, bigImage);
  });
};
