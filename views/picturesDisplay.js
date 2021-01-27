var pictures = require("../models/pictures");

const getRandomSize = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var PictureDisplay = {
  oninit: pictures.loadList,
  // oncreate: pictures.initGrid,
  view: () =>
    m("div", { class: "grid", id: "grid" }, [
      pictures.list.map((picture, i) => {
        var style = {};

        if (picture.width < picture.height) {
          style = {
            gridColumn: "span 1",
            gridRow: "span 2",
          };
        } else if (
          picture.width > picture.height &&
          i < getRandomSize(0, i + 10)
        ) {
          style = {
            gridColumn: "span 2",
            gridRow: "span 2",
          };
        }

        return m("div", { class: "grid-item ", style: style }, [
          m("img", {
            // class: "layout" + getRandomSize(1, 5),
            // width: getRandomSize(200, 400),
            // height: getRandomSize(200, 400),
            alt: picture.author,
            src: picture.download_url,
          }),
        ]);
      }),
    ]),
};

module.exports = PictureDisplay;
