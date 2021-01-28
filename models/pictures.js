const PictureDisplay = require("../views/picturesDisplay");

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

var Picture = {
  page: 1,
  list: [],
  loadList: () => {
    return m
      .request({
        method: "GET",
        url: "https://picsum.photos/v2/list?limit=20&page=" + Picture.page,
      })
      .then((result) => {
        Picture.page += 1;
        result = shuffleArray(result);
        result.map((picture) => {
          Picture.list.push(picture);
        });
      });
  },
  infiniteScroll: () => {
    document.querySelector(".main-content").addEventListener(
      "scroll",
      () => {
        var scrollTop = document.querySelector(".main-content").scrollTop;
        var scrollHeight = document.querySelector(".main-content").scrollHeight;
        var offsetHeight = document.querySelector(".main-content").offsetHeight;
        var contentHeight = scrollHeight - offsetHeight;

        if (contentHeight <= scrollTop) {
          Picture.loadList();
        }
      },
      false
    );
  },
};

module.exports = Picture;
