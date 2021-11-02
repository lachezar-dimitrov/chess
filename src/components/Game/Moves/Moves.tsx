import React from 'react';
import AppStore from '../../../store/AppStore';

type Props = {
    store: AppStore;
}

export default class Moves extends React.Component<Props> {
  render(): Array<JSX.Element> {
    const { store } = this.props;
    const { history, jumpTo } = store;

    return history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';

      return (
        <li key={step.id}>
          <button
            type="button"
            onClick={() => jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });
  }
}
