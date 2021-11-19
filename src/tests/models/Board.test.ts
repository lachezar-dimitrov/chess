import Board from '../../store/models/Board';

describe('calculateTheWinner method:', () => {
  test('should return empty string if there is no winner', () => {
    // Arrange
    const boardInstance = new Board();
    const expectedResult = '';

    // Act
    const winnerSymbol = boardInstance.calculateWinner(0, 1);

    // Assert
    expect(winnerSymbol).toBe(expectedResult);
  });

  test('should return the symbol of the winner horizontally', () => {
    // Arrange
    const boardInstance = new Board();
    const symbol = 'X';
    const expectedResult = 'X';

    // Act
    boardInstance.setValue(0, 0, symbol);
    boardInstance.setValue(0, 1, symbol);
    boardInstance.setValue(0, 2, symbol);

    const winnerSymbol = boardInstance.calculateWinner(0, 2);

    // Assert
    expect(winnerSymbol).toBe(expectedResult);
  });

  test('should return the symbol of the winner vertically', () => {
    // Arrange
    const boardInstance = new Board();
    const symbol = 'X';
    const expectedResult = 'X';

    // Act
    boardInstance.setValue(0, 0, symbol);
    boardInstance.setValue(1, 0, symbol);
    boardInstance.setValue(2, 0, symbol);

    const winnerSymbol = boardInstance.calculateWinner(2, 0);

    // Assert
    expect(winnerSymbol).toBe(expectedResult);
  });

  test('should return the symbol of the winner diagonally', () => {
    // Arrange
    const boardInstance = new Board();
    const symbol = 'X';
    const expectedResult = 'X';

    // Act
    boardInstance.setValue(0, 0, symbol);
    boardInstance.setValue(1, 1, symbol);
    boardInstance.setValue(2, 2, symbol);

    const winnerSymbol = boardInstance.calculateWinner(2, 2);

    // Assert
    expect(winnerSymbol).toBe(expectedResult);
  });
});
