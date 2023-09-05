class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // If w or h is not provided or negative, set them to undefined
      this.width = undefined;
      this.height = undefined;
    }
  }
}

module.exports = Rectangle;
