import AppStore from '../../store/AppStore';

describe('get status():', () => {
  let appStoreInstance: AppStore;

  beforeEach(() => {
    // Arrange
    appStoreInstance = new AppStore();
  });

  test('should show the next player', () => {
    // Arrange
    const expectedOutput = 'Next player: X';

    // Act
    const output = appStoreInstance.status;

    // Assert
    expect(output).toBe(expectedOutput);
  });

  test('should change the status only when win occur', () => {
    /// Arrange
    const expectedOutput = 'The winner is X';
    appStoreInstance.winnerSymbol = 'X';

    // Act
    const output = appStoreInstance.status;

    // Assert
    expect(output).toBe(expectedOutput);
  });

  test('should change the draw status only when draw occur', () => {
    /// Arrange
    const expectedOutput = 'Draw';
    // Current workaround
    appStoreInstance.draws = 1;

    // Act
    const output = appStoreInstance.status;

    // Assert
    expect(output).toBe(expectedOutput);
  });
});

describe('handleBoxClick in App store:', () => {
  let appStoreInstance: AppStore;

  beforeEach(() => {
    // Arrange
    appStoreInstance = new AppStore();
  });

  test('should set the correct winner if there is a winner', () => {
    // Arrange
    const expectedOutput = 'X';
    // Act
    appStoreInstance.handleBoxClick(0, 0, 'X');
    appStoreInstance.handleBoxClick(0, 1, 'X');
    appStoreInstance.handleBoxClick(0, 2, 'X');

    const output = appStoreInstance.winnerSymbol;

    // Assert
    expect(output).toBe(expectedOutput);
  });

  test('should increase the win counter to the winner', () => {
    // Arrange
    const playerSymbol = 'X';
    // TODO Currently players symbols in the AppStore class is hard-coded
    // with X and O and here if we use something different the test will break
    const expectedOutput = 1;
    const { players } = appStoreInstance;

    // Act
    appStoreInstance.handleBoxClick(0, 0, playerSymbol);
    appStoreInstance.handleBoxClick(0, 1, playerSymbol);
    appStoreInstance.handleBoxClick(0, 2, playerSymbol);

    const output = players
      .find((player) => player.symbol === playerSymbol)
      ?.history
      .wins;

    // Assert
    expect(output).toBe(expectedOutput);
  });

  test('should increase the loss counter to the losers', () => {
    // Arrange
    const playerSymbol = 'X';
    const { players } = appStoreInstance;

    // Act
    appStoreInstance.handleBoxClick(0, 0, playerSymbol);
    appStoreInstance.handleBoxClick(0, 1, playerSymbol);
    appStoreInstance.handleBoxClick(0, 2, playerSymbol);

    const output = players
      .filter((player) => player.symbol !== playerSymbol)
      .map((player) => player.history)
      .map((player) => player.loses);

    // Assert
    expect(output.every((value) => value === 1)).toBeTruthy();
  });

  test('should increase the draw counter when draw occur', () => {
    // Arrange
    const xPlayerSymbol = 'X';
    const oPlayerSymbol = 'O';

    // Act
    appStoreInstance.handleBoxClick(0, 0, xPlayerSymbol);
    appStoreInstance.handleBoxClick(0, 1, oPlayerSymbol);
    appStoreInstance.handleBoxClick(0, 2, xPlayerSymbol);

    appStoreInstance.handleBoxClick(1, 0, xPlayerSymbol);
    appStoreInstance.handleBoxClick(1, 1, oPlayerSymbol);
    appStoreInstance.handleBoxClick(1, 2, oPlayerSymbol);

    appStoreInstance.handleBoxClick(2, 0, oPlayerSymbol);
    appStoreInstance.handleBoxClick(2, 1, xPlayerSymbol);
    appStoreInstance.handleBoxClick(2, 2, xPlayerSymbol);

    const output = appStoreInstance.draws;

    // Assert
    expect(output).toBe(1);
  });
});
