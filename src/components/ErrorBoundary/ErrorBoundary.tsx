import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

type State = {
  hasError: boolean;
}

/**
 * Error boundaries work like a JavaScript catch {} block, but for components.
 * Only class components can be error boundaries.
 * Error boundaries only catch errors in the components below them in the tree.
 */
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
