import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>There was an error.</h2>
          {/* <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button> */}
        </>
      );
    }
    return this.props.children;
  }
}
export default Index;