import { observer } from 'mobx-react';
import React, { ReactNode, Component } from 'react';
import { StoreContext } from '../../../StoreProvider/StoreProvider';

type Props = {
  value: string;
  index: number;
}

@observer
export default class Square extends Component<Props> {
  static defaultProps = {
    value: '',
  };

  render(): ReactNode {
    const { index, value } = this.props;
    const { onClick } = this.context;

    return (
      <button
        type="button"
        className="square"
        onClick={() => onClick(index)}
      >
        {value}
      </button>
    );
  }
}

Square.contextType = StoreContext;
