module.exports = class CheckCell {
  getNeighbours(x, y) {
    var arr = [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
    ];
    return arr;
  }
  isOnBoard(x, y, rows, columns) {
    var x_pos = x >= 0 && x < rows;
    var y_pos = y >= 0 && y < columns;

    return x_pos && y_pos;
  }

  applyRules(neightbours, x, y, firstGeneration, secondGeneration) {
    if (firstGeneration[x][y] == "*" && (neightbours < 2 || neightbours > 3)) {
      secondGeneration[x][y] = ".";
    } else if (firstGeneration[x][y] == "." && neightbours == 3) {
      secondGeneration[x][y] = "*";
    } else {
      secondGeneration[x][y] = firstGeneration[x][y];
    }
    return secondGeneration[x][y];    
  }
};
