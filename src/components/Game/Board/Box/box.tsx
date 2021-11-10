import { observer } from 'mobx-react';
import React, { ReactNode, Component } from 'react';
import { StoreContext } from '../../../StoreProvider/StoreProvider';

type Props = {
  value: string;
  index: number;
};

@observer
export default class Box extends Component<Props> {
  private eventHandler = (): void => {
    const { index } = this.props;
    const { onClick } = this.context;

    onClick(index);
  }

  render(): ReactNode {
    const { value = '' } = this.props;

    return (
      <button
        type="button"
        className="square"
        onClick={this.eventHandler}
      >
        {value}
      </button>
    );
  }
}

Box.contextType = StoreContext;
