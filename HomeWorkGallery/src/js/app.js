import { URL } from "./constants";

export const init = () => {
  const bigPhoto = document.querySelector("#bigPhoto");
  const smallPhoto = document.querySelector("#smallPhoto");
  getRequest(URL)
    .then((data) => {
      renderPhotos(data, bigPhoto, smallPhoto);
      return data;
    })
    .then((data) => {
      const bigImage = document.querySelector("#bigImage");
      let lastImage;
      smallPhoto.addEventListener(
        "click",
        (event) => (lastImage = changeImage(event, bigImage))
      );
      const intervalButton = document.querySelector("#intervalButton");
      intervalButton.addEventListener("click", (event) => {
        const x = document.querySelector("#x");
     /*    x.parentElement.classList.remove("hide"); */
        const stop = autoChangeImage(event, bigImage, data, lastImage, smallPhoto);
        x.addEventListener("click", () => clearInterval(stop));
      });
    });
};
export const getRequest = async (url) => {
  const answer = await fetch(url);
  return answer.json();
};

export const renderPhotos = (data, bigPhoto, smallPhoto) => {
  for (var i = 0; i < data.length; i++) {
    if (i === 0) {
      const item = document.createElement("div");
      item.classList.add("title__photo");
      const bigImg = document.createElement("img");
      bigImg.setAttribute("src", `${data[i].urls.small}`);
      bigImg.setAttribute("id", "bigImage");
      item.appendChild(bigImg);
      bigPhoto.appendChild(item);
    }
    const item = document.createElement("div");
    item.classList.add("body__item");
    const smallImg = document.createElement("img");
    smallImg.setAttribute("src", `${data[i].urls.small}`);
    item.appendChild(smallImg);
    smallPhoto.appendChild(item);
  }
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
    return event.target.src;
  }
};

export const autoChangeImage = (event, bigImage, data, lastImage,smallPhoto, i=3) => {
    bigImage.classList.add('bigFrame');
  const kek = setTimeout(() => {
    bigImage.src = data[i].urls.small
    console.log(data[i].urls.small)
    clearTimeout(kek);
  }, 3000);
  return (autoChangeImage(event,bigImage, data,lastImage,smallPhoto, i+1))
};
