const grid = document.querySelector(".grid");
let gridSize = 16;
let currentEffect = null;

function getRandomHexColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  while (randomColor.length < 6) {
    randomColor = "0" + randomColor;
  }
  return "#" + randomColor;
}

function addGrid() {
  const totalBlocks = Math.pow(gridSize, 2);
  for (let i = 0; i < totalBlocks; i++) {
    const gridBlock = document.createElement("div");
    grid.appendChild(gridBlock);
    gridBlock.classList.add("grid-block-" + gridSize);
    gridBlock.classList.add("white-block");
    gridBlock.addEventListener("mouseover", function () {
      if (currentEffect === "rainbow") {
        gridBlock.classList.remove("white-block");
        gridBlock.style.backgroundColor = getRandomHexColor();
      } else if (currentEffect === "shadow") {
        gridBlock.style.backgroundColor = "";
        gridBlock.classList.remove("white-block");
        gridBlock.classList.add("black-block");
        let opacity = parseFloat(gridBlock.style.opacity) || 0.0;
        opacity += 0.1;
        if (opacity > 1) {
          opacity = 1;
        }
        gridBlock.style.opacity = opacity.toString();
      } else {
        gridBlock.style.backgroundColor = "";
        gridBlock.classList.remove("white-block");
        gridBlock.classList.add("black-block");
      }
    });
  }
}
window.addEventListener("DOMContentLoaded", addGrid);

function resetGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// set buttons for different sizes
for (let i = 16; i <= 128; i *= 2) {
  const button = document.querySelector("#b" + i);
  button.addEventListener("click", () => {
    resetGrid();
    gridSize = i;
    addGrid();
  });
}

// black button
const buttonReset = document.querySelector("#black");
buttonReset.addEventListener("click", () => {
  currentEffect = null;
});

// rainbow effect button
const buttonRainbow = document.querySelector("#rainbow");
buttonRainbow.addEventListener("click", () => {
  currentEffect = "rainbow";
});

//shadow effect button
const buttonShadow = document.querySelector("#shadow");
buttonShadow.addEventListener("click", () => {
  currentEffect = "shadow";
});

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", () => {
  resetGrid();
  addGrid();
});
