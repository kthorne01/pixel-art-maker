// Select color input
const colorPicker = document.getElementById("colorPicker");


const pixelCanvas = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");


function makeGrid() {
    pixelCanvas.innerHTML = '';  //to clear previous grid

    const rows = inputHeight.value;
    const cols = inputWidth.value;

    for (let r = 0; r < rows; r++) {
        let row = pixelCanvas.insertRow(r);
        for (let c = 0; c < cols; c++) {
            let cell = row.insertCell(c);

            //each cell has click event
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = colorPicker.value;
            });
        }
    };

}

//call makeGrid() when user submits size
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});
