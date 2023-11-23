const grid = document.querySelector('.grid');
let gridSize = '16';

function getRandomHexColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
      randomColor = '0' + randomColor;
    }
    return '#' + randomColor;
  }

// 16x16 grid
function addGrid16 () {   
    for (let i = 0; i < 256; i++) {
        const gridBlock = document.createElement('div');
        grid.appendChild(gridBlock);
        gridBlock.classList.add('grid-block-16');
        gridBlock.classList.add('white-block');
        gridBlock.addEventListener('mouseover', function () {
            if (rainbowEffect === false && shadowEffect === false) {
                gridBlock.classList.add('black-block');
                gridBlock.classList.remove('white-block');
            } else if (rainbowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.style.backgroundColor = getRandomHexColor();
            } else if (shadowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.classList.add('black-block');
                let opacity = parseFloat(gridBlock.style.opacity) || 0.0;
                opacity += 0.1;
                if (opacity > 1) {
                    opacity = 1;
                }           
                gridBlock.style.opacity = opacity.toString();
            }
        });
    }
    gridSize = '16';
}
window.addEventListener('DOMContentLoaded', addGrid16);

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

const button16 = document.querySelector('#b16');
button16.addEventListener('click', () => {
    resetGrid();
    addGrid16();
});

// 32x32 grid

function addGrid32 () {   
    for (let i = 0; i < 1024; i++) {
        const gridBlock = document.createElement('div');
        grid.appendChild(gridBlock);
        gridBlock.classList.add('grid-block-32');
        gridBlock.classList.add('white-block');
        gridBlock.addEventListener('mouseover', function () {
            if (rainbowEffect === false && shadowEffect === false) {
                gridBlock.classList.add('black-block');
                gridBlock.classList.remove('white-block');
            } else if (rainbowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.style.backgroundColor = getRandomHexColor();
            } else if (shadowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.classList.add('black-block');
                let opacity = parseFloat(gridBlock.style.opacity) || 0.0;
                opacity += 0.1;
                if (opacity > 1) {
                    opacity = 1;
                }           
                gridBlock.style.opacity = opacity.toString();
            }
        });
    }
    gridSize = '32';
}

const button32 = document.querySelector('#b32');
button32.addEventListener('click', () => {
    resetGrid();
    addGrid32();
});

// 64x64 grid

function addGrid64 () {   
    for (let i = 0; i < 4096; i++) {
        const gridBlock = document.createElement('div');
        grid.appendChild(gridBlock);
        gridBlock.classList.add('grid-block-64');
        gridBlock.classList.add('white-block');
        gridBlock.addEventListener('mouseover', function () {
            if (rainbowEffect === false && shadowEffect === false) {
                gridBlock.classList.add('black-block');
                gridBlock.classList.remove('white-block');
            } else if (rainbowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.style.backgroundColor = getRandomHexColor();
            } else if (shadowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.classList.add('black-block');
                let opacity = parseFloat(gridBlock.style.opacity) || 0.0;
                opacity += 0.1;
                if (opacity > 1) {
                    opacity = 1;
                }           
                gridBlock.style.opacity = opacity.toString();
            }
        });
    }
    gridSize = '64';
}

const button64 = document.querySelector('#b64');
button64.addEventListener('click', () => {
    resetGrid();
    addGrid64();
});

// 128x128 grid

function addGrid128 () {   
    for (let i = 0; i < 16384; i++) {
        const gridBlock = document.createElement('div');
        grid.appendChild(gridBlock);
        gridBlock.classList.add('grid-block-128');
        gridBlock.classList.add('white-block');
        gridBlock.addEventListener('mouseover', function () {
            if (rainbowEffect === false && shadowEffect === false) {
                gridBlock.classList.add('black-block');
                gridBlock.classList.remove('white-block');
            } else if (rainbowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.style.backgroundColor = getRandomHexColor();
            } else if (shadowEffect === true) {
                gridBlock.classList.remove('white-block');
                gridBlock.classList.add('black-block');
                let opacity = parseFloat(gridBlock.style.opacity) || 0.0;
                opacity += 0.1;
                if (opacity > 1) {
                    opacity = 1;
                }           
                gridBlock.style.opacity = opacity.toString();
            }
        });
    }
    gridSize = '128';
}

const button128 = document.querySelector('#b128');
button128.addEventListener('click', () => {
    resetGrid();
    addGrid128();
});

let rainbowEffect = false;
let shadowEffect = false;

// black button
const buttonReset = document.querySelector('#black');
buttonReset.addEventListener('click', () => {
    rainbowEffect = false;
    shadowEffect = false;
});

// rainbow effect button

const buttonRainbow = document.querySelector('#rainbow');
buttonRainbow.addEventListener('click', () => {
    rainbowEffect = true;
    shadowEffect = false;
});

//shadow effect button
const buttonShadow = document.querySelector('#shadow');
buttonShadow.addEventListener('click', () => {
    rainbowEffect = false;
    shadowEffect = true;
});

const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', () => {
    if (gridSize === '16') {
        resetGrid();
        addGrid16();
    } else if (gridSize === '32') {
        resetGrid();
        addGrid32();
    } else if (gridSize === '64') {
        resetGrid();
        addGrid64();
    } else if (gridSize === '128') {
        resetGrid();
        addGrid128();
    }
});
