var headerNode = document.getElementById("header");
var contentNode = document.getElementById("content");
var Header = require("../views/header");
var Content = require("../views/content");

var Layout = {
  oninit: () => {
    m.mount(header, Header);
  },

  view: (vnode) => {
    return m("div", { class: "main-content" }, vnode.children);
  },
};

m.route(content, "/", {
  "/": {
    render: () => {
      return m(Layout, m(Content));
    },
    onmatch: () => {
      // this will be called on route change, so update your mounted components as needed
      // console.log("ca marche");
    },
  },
});
