const getRandomSize = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleArray = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const imageLoader = (elem, src) => {
  console.log(elem.src);
  var image = elem;
  var downloadingImage = new Image();
  downloadingImage.onload = function () {
    image.src = this.src;
  };
  downloadingImage.src = src;
};
