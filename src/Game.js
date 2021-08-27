const CheckCell = require("./CellCheck");

var firstGeneration = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "*", ".", ".", "."],
  [".", ".", ".", "*", "*", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

var secondGeneration = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

const rows = 4,
  columns = 8;

const cell = new CheckCell();

function countNeightbours(x, y) {
  var neightbours = cell.getNeighbours(x, y);
  var totalNeighbours = 0;
  neightbours.forEach((coord) => {
    if (
      cell.isOnBoard(coord[0], coord[1], rows, columns) &&
      firstGeneration[coord[0]][coord[1]] == "*"
    ) {
      totalNeighbours += 1;
    }
  });

  return totalNeighbours;
}

function getNextGeneration() {
  firstGeneration.forEach((row, x) => {
    row.forEach((_column, y) => {
      var livingNeighbours = countNeightbours(x, y);
      cell.applyRules(livingNeighbours, x, y, firstGeneration, secondGeneration);
    });
  });
  return secondGeneration;
}

function printGrid(arrCells) {
  arrCells.forEach((row) => {
    console.log(row.join(" "));
  });
}

console.log("1st Generation");
printGrid(firstGeneration);
getNextGeneration();
console.log("2nd Generation");
printGrid(secondGeneration);
