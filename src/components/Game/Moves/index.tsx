import React from 'react';
import { observer } from 'mobx-react';
import AppStore from '../../../store/app';
import Move from './Move';

type Props = {
    store: AppStore;
}

@observer
export default class Moves extends React.Component<Props> {
  render(): JSX.Element {
    const { store } = this.props;
    const { history } = store;

    return (
      <ol>
        {history.map((step, move) => <Move key={step.id} move={move} />)}
      </ol>
    );
  }
}
