var PictureDisplay = require("./picturesDisplay");
var pictures = require("../models/pictures");
const Picture = require("../models/pictures");

var Content = {
  oncreate: Picture.infiniteScroll,
  view: () =>
    m("div", { class: "content" }, [
      m("h1", "Grid Image Gallery"),
      m("button", { onclick: Picture.loadList }, "Change Layout"),
      m(PictureDisplay),
      m("img", {
        alt: "loading.gif",
        src: "/public/css/loading.gif",
        style: { marginTop: 400 },
      }),
    ]),
};

module.exports = Content;
