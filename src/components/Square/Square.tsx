import React from 'react';

type Props = {
  value: string
  onClick: () => void;
}

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
