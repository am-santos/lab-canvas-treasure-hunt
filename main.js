// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const gridLineWidth = 2;

// Iteration 1
function drawGrid() {
  context.fillStyle = 'black';
  for (let i = 0; i < 15; i++) {
    context.fillRect(i * (width / 10) - gridLineWidth / 2, 0, gridLineWidth, height);
    context.fillRect(0, i * (width / 10) - gridLineWidth / 2, height, gridLineWidth);
  }
}

function drawPlayer(row, col) {
  const characterImageURL = '/images/character-down.png';

  const characterImage = new Image();
  characterImage.src = characterImageURL;

  const imageWidth = 2;
  const imageHeigth = 2;
  // context.fillRect((row*width/10)+(width/20-15),col*width/10+(height/20-15),30,30); // 15 is half the size of the square !!!
  // context.fillRect((col*width/10)+(width/20-15),row*width/10+(height/20-15),30,30); // 15 is half the size of the square !!!
  characterImage.addEventListener('load', () => {
    context.drawImage(
      characterImage,
      (row * width) / 10 + (width / 20 - 15),
      (col * width) / 10 + (height / 20 - 15),
      100,
      100
    );
  });
}

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }
}

function drawTreasure() {
  const treasurePostion = new Treasure();
  treasurePostion.setRandomPosition();
  context.fillStyle = 'green';

  context.fillRect(
    (treasurePostion.col * width) / 10 + (width / 20 - 15),
    (treasurePostion.row * width) / 10 + (height / 20 - 15),
    30,
    30
  ); // 15 is half the size of the square !!!
}

function drawEverything() {
  drawGrid();
  drawPlayer(2, 3);
  /*   drawPlayer(3,2); //-----> This row and col should point the character.row and character.col.
  drawTreasure();
*/
}

/* 

window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    
    const character = new Character();
    // React based on the key pressed
    switch (event.keyCode) {
        case 37: // Arrow Left
        character.moveLeft();
        break;
        case 38: // Arrow Up
        character.moveUp();
        break;
        case 39: // Arrow right
        character.moveRight();
        break;
        case 40: //Arrow Down
        character.moveDown();
        break;
    }
}; */

drawEverything();
