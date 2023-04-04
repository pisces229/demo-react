import React from 'react';

class Index extends React.Component<{ value: string }, { value: string }> {
  constructor(props: { value: string }) {
    super(props);
    this.state = { value: 'state' };
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('componentDidCatch', error, errorInfo);
  }
  render() {
    return (
      <>
        <h3>Life Cycle</h3>
        <p>props.value:{this.props.value}</p>
        <p>state.value:{this.state.value}</p>
        <button onClick={async () => this.setState((state) => ({ ...state, value: state.value + 1 }))}>Click</button>
      </>
    );
  }
}
export default Index;
