export const renderBigPhoto = (dataItem, node) => {
    const item = document.createElement("div");
    item.classList.add("title__photo");
    const bigImg = document.createElement("img");
    bigImg.setAttribute("src", `${dataItem.urls.regular}`);
    bigImg.setAttribute("id", "bigImage");
    item.appendChild(bigImg);
    node.appendChild(item);
  };
  export const renderSmallPhotos = (data, node) => {
    for (var i = 1; i < data.length; i++) {
      const item = document.createElement("div");
      item.classList.add("body__item");
      const smallImg = document.createElement("img");
      smallImg.setAttribute("src", `${data[i].urls.regular}`);
      item.appendChild(smallImg);
      node.appendChild(item);
    }
  };