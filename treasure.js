class Treasure {
    constructor(row,col) {
        this.row = row;
        this.col = col;
    }

    setRandomPosition() {
        this.row = Math.floor(Math.random()*10);
        this.col = Math.floor(Math.random()*10);
    }
}

/* const something = new Treasure;

something.setRandomPosition()
console.log(something.col);
console.log(something.row); */