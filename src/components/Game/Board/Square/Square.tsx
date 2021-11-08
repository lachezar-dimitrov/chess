import { observer } from 'mobx-react';
import React, { ReactNode, Component } from 'react';
import {
  storeInjector,
} from '../../../../containers/StoreInjector/StoreInjector';

type Props = {
  value?: number;
  // onClick?: (index: number) => void;
}

@observer
class Square extends Component<Props> {
  // static defaultProps = {
  //   value: 0,
  // };

  render(): ReactNode {
    const { value = 0 } = this.props;
    // const { onClick } = this.context;

    return (
      <button
        type="button"
        className="square"
        // onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

// Square.contextType = StoreContext;

export default storeInjector<Props>((store) => ({
  value: store.value,
}), Square);
