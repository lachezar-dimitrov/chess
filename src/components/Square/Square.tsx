import React from 'react';

type Props = {
  value: string
};

type State = {
  value: string;
};

export default class Square extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  private squareClickHandler = (): void => {
    this.setState({ value: 'X' });
  }

  render(): JSX.Element {
    const { value } = this.state;

    return (
      <button
        type="button"
        className="square"
        onClick={this.squareClickHandler}
      >
        {value}
      </button>
    );
  }
}
