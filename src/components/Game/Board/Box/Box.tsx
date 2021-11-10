import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

type Props = {
  value: string;
  className: string;
  onClick: () => void
};

const Box: FunctionComponent<Props> = (props) => {
  const { value = '', className, onClick = () => null } = props;

  return (
    <button
      type="button"
      className={classNames('box', className)}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Box;
