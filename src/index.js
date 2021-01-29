var headerNode = document.getElementById("header");
var contentNode = document.getElementById("content");
var Header = require("../views/header");
var Content = require("../views/content");

//to mount multiple component
var Layout = {
  oninit: () => {
    m.mount(header, Header);
  },

  // run on every route change:
  view: (vnode) => {
    return m("div", { class: "main-content" }, vnode.children);
  },
};

m.route(content, "/", {
  // using RouteResolver
  "/": {
    render: () => {
      return m(Layout, m(Content));
    },
    onmatch: () => {
      // this will be called on route change, so update your mounted components as needed
      console.log("ca marche");
    },
  },
});
