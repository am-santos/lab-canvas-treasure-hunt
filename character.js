class Character {
    constructor (row,col) {
        this.row = row; 
        this.col = col; 
    }
    moveUp() {
        this.row--
    }

    moveRight() {
        this.col++
    }
    moveDown() {
        this.row++
    }
    moveLeft() {
        this.col--
    }
}
