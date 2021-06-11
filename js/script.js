const grid = document.getElementById("grid");
const rowInput = document.getElementById("row-input");
const rowNumber = document.getElementById("row-number");
const columnInput = document.getElementById("column-input");
const columnNumber = document.getElementById("column-number");

let rowsDisplayed = parseInt(rowInput.getAttribute("initial"));
const rowsMax = parseInt(rowInput.getAttribute("max"));
const rowsMin = parseInt(rowInput.getAttribute("min"));
let columnsDisplayed = parseInt(columnInput.getAttribute("initial"));
const columnsMax = parseInt(columnInput.getAttribute("max"));
const columnsMin = parseInt(columnInput.getAttribute("min"));

rowNumber.innerHTML = rowsDisplayed;
columnNumber.innerHTML = columnsDisplayed;

const addRow = () => {
    if (!(rowsDisplayed === rowsMax)) {
        rowsDisplayed++;
        let newRow = document.createElement("tr");
        for (let i = 0; i < columnsDisplayed; i++) {
            let newColumn = document.createElement("td");
            newRow.append(newColumn);
        }
        grid.append(newRow);
        rowNumber.innerHTML = rowsDisplayed;
    }
}

const removeRow = () => {
    if (!(rowsDisplayed === rowsMin)) {
        rowsDisplayed--;
        grid.removeChild(grid.lastChild);
        rowNumber.innerHTML = rowsDisplayed;
    }
}

const addColumn = () => {
    if (!(columnsDisplayed === columnsMax)) {
        columnsDisplayed++;
        for (row of grid.querySelectorAll("tr")) {
            let newColumn = document.createElement("td");
            row.append(newColumn);
        }
        columnNumber.innerHTML = columnsDisplayed;
    }
}

const removeColumn = () => {
    if (!(columnsDisplayed === columnsMin)) {
        columnsDisplayed--;
        for (row of grid.querySelectorAll("tr"))
            row.removeChild(row.lastChild);
        columnNumber.innerHTML = columnsDisplayed;
    }
}
