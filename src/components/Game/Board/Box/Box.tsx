import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

type Props = {
  value: string;
  className: string;
  onClick: () => void
};

const Box: FunctionComponent<Props> = (props) => {
  const {
    // showValue = false,
    value = '',
    className,
    onClick = () => null,
  } = props;

  return (
    <button
      type="button"
      className={classNames('box', className)}
      onClick={onClick}
      // onMouseOver={onClick}
      // onFocus={onClick}
    >
      {/* {5 === 6 ? value : null} */}
      {value}
    </button>
  );
};

export default Box;
