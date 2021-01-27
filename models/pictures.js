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

const getRandomSize = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var Picture = {
  page: 1,
  list: [],
  loadList: () => {
    return m
      .request({
        method: "GET",
        url: "https://picsum.photos/v2/list?page=" + Picture.page,
      })
      .then((result) => {
        Picture.list = shuffle(result);
      });
  },
  initGrid: () => {
    // var elem = document.getElementById("grid");

    pictures.list.map((picture, i) => {
      picture.width = getRandomSize(200, 400);
      picture.height = getRandomSize(200, 400);
      picture.width = width;
      picture.height = height;
    });
  },
};

module.exports = Picture;
