var PictureDisplay = require("./picturesDisplay");
var pictures = require("../models/pictures");
const Picture = require("../models/pictures");

var Content = {
  oncreate: Picture.infiniteScroll,
  view: () =>
    m("div", { class: "content" }, [
      m("h1", "Grid Image Gallery"),
      m(PictureDisplay),
      m("img", {
        alt: "loading.gif",
        src: "/public/css/loading.gif",
        style: { marginTop: 200, maxWidth: "50px" },
      }),
    ]),
};

module.exports = Content;
