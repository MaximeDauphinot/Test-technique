var pictures = require("../models/pictures");

var PictureDisplay = {
  oninit: pictures.loadList,
  view: (vnode) =>
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
          i < getRandomSize(0, i + 50)
        ) {
          style = {
            gridColumn: "span 2",
            gridRow: "span 2",
          };
        }

        return m("div", { class: "grid-item ", style: style }, [
          m("img", {
            id: "image" + i,
            alt: picture.author,
            src: "/public/css/loading.gif",
            onload: (e) => {
              imageLoader(e.currentTarget, picture.download_url);
            },
          }),
        ]);
      }),
    ]),
};

module.exports = PictureDisplay;
