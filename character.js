class Character {
  constructor() {
    this.col = 0; //col
    this.row = 0; // row
  }
  moveUp() {
    this.col--;
  }

  moveRight() {
    this.row++;
  }
  moveDown() {
    this.col++;
  }
  moveLeft() {
    this.row--;
  }
}
