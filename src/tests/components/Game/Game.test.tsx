import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../../components/Game/Game';

describe('Game component:', () => {
  test('should display the rules of the game', () => {
    const players = [
      {
        history: { wins: 0, loses: 0 },
        symbol: 'X',
      },
      {
        history: { wins: 0, loses: 0 },
        symbol: 'O',
      },
    ];

    const props = {
      draws: 0,
      players,
      winnerSymbol: '',
      currentPlayerIndex: 1,
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        players={props.players}
        winnerSymbol={props.winnerSymbol}
        currentPlayerIndex={props.currentPlayerIndex}
      />,
    );

    expect(
      wrapper.find("[data-unit-test='game-info']").length,
    ).toEqual(1);
  });

  test('should display the game history', () => {
    const players = [
      {
        history: { wins: 0, loses: 0 },
        symbol: 'X',
      },
      {
        history: { wins: 0, loses: 0 },
        symbol: 'O',
      },
    ];

    const props = {
      draws: 0,
      players,
      winnerSymbol: '',
      currentPlayerIndex: 1,
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        players={props.players}
        winnerSymbol={props.winnerSymbol}
        currentPlayerIndex={props.currentPlayerIndex}
      />,
    );

    expect(
      wrapper.find("[data-unit-test='history']").length,
    ).toEqual(1);
  });
});

describe('renderHistory method:', () => {
  test('should show the next player', () => {
    const players = [
      {
        history: { wins: 0, loses: 0 },
        symbol: 'X',
      },
      {
        history: { wins: 0, loses: 0 },
        symbol: 'O',
      },
    ];

    const props = {
      draws: 0,
      players,
      winnerSymbol: '',
      currentPlayerIndex: 1,
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        players={props.players}
        winnerSymbol={props.winnerSymbol}
        currentPlayerIndex={props.currentPlayerIndex}
      />,
    );

    expect(
      wrapper.find("[data-unit-test='status']").text(),
    ).toBe('Next player: O');
  });

  test('should change the status only when win occur', () => {
    const players = [
      {
        history: { wins: 0, loses: 0 },
        symbol: 'X',
      },
      {
        history: { wins: 0, loses: 0 },
        symbol: 'O',
      },
    ];

    const props = {
      draws: 0,
      players,
      winnerSymbol: 'X',
      currentPlayerIndex: 1,
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        players={props.players}
        winnerSymbol={props.winnerSymbol}
        currentPlayerIndex={props.currentPlayerIndex}
      />,
    );

    expect(
      wrapper.find("[data-unit-test='status']").text(),
    ).toBe('The winner is X');
  });

  test('should change the draw status only when draw occur', () => {
    const players = [
      {
        history: { wins: 0, loses: 0 },
        symbol: 'X',
      },
      {
        history: { wins: 0, loses: 0 },
        symbol: 'O',
      },
    ];

    const props = {
      draws: 1,
      players,
      winnerSymbol: '',
      currentPlayerIndex: 1,
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        players={props.players}
        winnerSymbol={props.winnerSymbol}
        currentPlayerIndex={props.currentPlayerIndex}
      />,
    );

    expect(
      wrapper.find("[data-unit-test='status']").text(),
    ).toBe('Draw');
  });
});
