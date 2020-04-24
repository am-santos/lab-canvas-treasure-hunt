// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Grid Specs
//  - Line Width:
const gridLineWidth = 2;
//  - Number of squares:
const numCol = 10;
const numRow = 10;

const imageWidth = width / numRow;
const imageHeigth = height / numCol;

// Draw Background Grid
function drawGrid() {
  context.fillStyle = 'black';
  for (let i = 0; i < 15; i++) {
    context.fillRect(i * (width / numRow) - gridLineWidth / 2, 0, gridLineWidth, height);
    context.fillRect(0, i * (width / numCol) - gridLineWidth / 2, width, gridLineWidth);
  }
}

// Draw Player
function drawPlayer(row, col) {
  const characterImageURL = '/images/character-down.png';

  const characterImage = new Image();
  characterImage.src = characterImageURL;

  characterImage.addEventListener('load', () => {
    context.drawImage(characterImage, (row * width) / 10, (col * width) / 10, imageWidth, imageHeigth);
  });
}

// Draw Treasure
function drawTreasure() {
  const treasureImageURL = '/images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageURL;

  /* const treasure = new Treasure();
  treasure.setRandomPosition(); */

  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, (treasure.row * width) / 10, (treasure.col * width) / 10, imageWidth, imageHeigth);
  });
  context.drawImage(treasureImage, (treasure.row * width) / 10, (treasure.col * width) / 10, imageWidth, imageHeigth);
}

// Clear Image
function clearImage() {
  context.clearRect(0, 0, width, height);
}

//Function that, clears the image, draws the grid, draws the player and at the end it draws the treasure
function drawEverything(character) {
  clearImage();
  drawGrid();
  drawPlayer(character.row, character.col);
  drawTreasure();
}

function checksOverLapping(character, treasure) {
  if (character.row === treasure.row && character.col === treasure.col) {
    return true;
  }
}

// Creates the character
const character = new Character();

// Creates the treasure
const treasure = new Treasure();
treasure.setRandomPosition();

// Draws everything before any movement is done.
drawEverything(character);

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37: // Arrow Left
      character.moveLeft();
      drawEverything(character);
      break;
    case 38: // Arrow Up
      character.moveUp();
      drawEverything(character);
      break;
    case 39: // Arrow right
      character.moveRight();
      drawEverything(character);
      break;
    case 40: //Arrow Down
      character.moveDown();
      drawEverything(character);
      break;
  }

  // If position of character and treasure overlap, it sets new coordinates for the treasure and paints everything with new coordinates for treasure.
  if (checksOverLapping(character, treasure)) {
    treasure.setRandomPosition();
    drawEverything(character);
  }
});
