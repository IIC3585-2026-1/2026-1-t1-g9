const gridContainer = document.querySelector('.grid-demo');

let columns = 2;

function updateGrid() {
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    const text = document.getElementById('code');
    text.value = text.value.replace(
        /grid-template-columns:\s*repeat\(\d+,\s*1fr\);/,
        `grid-template-columns: repeat(${columns}, 1fr);`
    );
}

function addColumn() {
    if (columns < 4) {
        columns++;
        updateGrid();
    }
}

function removeColumn() {
    if (columns > 1) {
        columns--;
        updateGrid();
    }
}