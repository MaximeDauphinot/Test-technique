var PictureDisplay = require("./picturesDisplay");
var pictures = require("../models/pictures");

var Content = {
  view: () =>
    m("div", { class: "content" }, [
      m("h1", "Grid Image Gallery"),
      m("button", { onclick: () => m.redraw(PictureDisplay) }, "Change Layout"),
      m(PictureDisplay),
    ]),
};

module.exports = Content;
