import { observer } from 'mobx-react';
import React, { ReactNode, Component } from 'react';
import { StoreContext } from '../../../StoreProvider/StoreProvider';

type Props = {
  value: string;
}

@observer
export default class Square extends Component<Props> {
  static defaultProps = {
    value: 0,
  };

  render(): ReactNode {
    const { value = 0 } = this.props;
    const { onClick } = this.context;

    return (
      <button
        type="button"
        className="square"
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

Square.contextType = StoreContext;
