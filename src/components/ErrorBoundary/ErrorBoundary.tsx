import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

type State = {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? <h1>Sorry.. there was an error</h1> : children;
  }
}
