const CheckCell = require('../src/CellCheck');

let Cell = new CheckCell();
let rows = 4;
let columns = 8;
let firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];
  
  let secondGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];

test('should check if postition is on board', () => {
    const position = Cell.isOnBoard(1,2, rows, columns);
    expect(position).toBeTruthy();
});

test('should check if there are neighbours', () => {
    const haveNeighbours = Cell.getNeighbours(0,0);
    expect(haveNeighbours).toContainEqual([0, 1])
})
test('should check if rules are applied to new board', () => {
    //to check if is alive when having 3 neighbours
    let lives = Cell.applyRules(3,1,1, firstGeneration, secondGeneration);
    expect(lives).toContain('*');

    //to check if dies for overpopulation
    lives = Cell.applyRules(4,1,1, firstGeneration, secondGeneration);
    expect(lives).toContain('.');

    //to check if dies for underpopulation
    lives = Cell.applyRules(0,1,1, firstGeneration, secondGeneration);
    expect(lives).toContain('.');
})
