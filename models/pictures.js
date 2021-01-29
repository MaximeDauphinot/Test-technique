var Picture = {
  page: 1,
  list: [],
  loadedImage: [],
  loadList: () => {
    return m
      .request({
        method: "GET",
        url: "https://picsum.photos/v2/list?limit=30&page=" + Picture.page,
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
    var container = document.querySelector(".main-content");
    container.addEventListener(
      "scroll",
      () => {
        var scrollTop = container.scrollTop;
        var scrollHeight = container.scrollHeight;
        var offsetHeight = container.offsetHeight;
        var contentHeight = scrollHeight - offsetHeight;

        if (contentHeight - 1000 <= scrollTop) {
          Picture.loadList();
        }
      },
      false
    );
  },
};

module.exports = Picture;
