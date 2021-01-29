var Picture = require("../models/pictures");

var PictureDisplay = {
  oninit: Picture.loadList,
  view: (vnode) =>
    m("div", { class: "grid", id: "grid" }, [
      Picture.list.map((picture, i) => {
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

        return m(
          "div",
          { class: "grid-item author-listing", style: style, id: "grid" + i },
          [
            m("img", {
              id: "image" + i,
              alt: picture.author,
              src: picture.download_url,
              onload: (e) => {
                e.currentTarget.style.opacity = 1;
              },
            }),
            m("a", { class: "author-title" }, picture.author),
          ]
        );
      }),
    ]),
};

module.exports = PictureDisplay;
