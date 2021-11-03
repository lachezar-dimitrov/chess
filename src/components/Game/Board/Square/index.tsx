import React from 'react';
import { Props } from './SquareTypes';

export default function Square(props: Props): JSX.Element {
  const { value, onClick } = props;

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
