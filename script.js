

function addGrid () {
    const grid = document.querySelector('.grid');
    
    for (let i = 0; i < 256; i++) {
        const gridBlock = document.createElement('div');
        grid.appendChild(gridBlock);
        gridBlock.classList.add('grid-block-white');
        gridBlock.classList.add('grid-block-16');
    }

}

//grid load
window.addEventListener('DOMContentLoaded', addGrid)