import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../components/Game/Game';

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
      status: '',
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        status={props.status}
        players={props.players}
      />,
    );

    expect(
      wrapper.find("[data-test='game-info']").length,
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
      status: '',
    };

    const wrapper = shallow(
      <Game
        draws={props.draws}
        status={props.status}
        players={props.players}
      />,
    );

    expect(
      wrapper.find("[data-test='history']").length,
    ).toEqual(1);
  });
});
