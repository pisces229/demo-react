import React from 'react';

export class DemoComponentClassBased extends React.Component<
  {},
  { value: boolean }
> {
  constructor(props: {}) {
    super(props);
    this.state = { value: true };
  }
  render() {
    return (
      <>
        <h2>DemoComponentClassBased</h2>
        <button
          onClick={async () =>
            this.setState((state) => ({ value: !state.value }))
          }
        >
          Change
        </button>
        {this.state.value && <DemoLifeCycle />}
        <DemoNoProp />
        <DemoWithProp value="React" />
      </>
    );
  }
}
class DemoLifeCycle extends React.Component<{}, { value: number }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: 0 };
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
  render() {
    return (
      <>
        <h3>DemoLifeCycle</h3>
        <h3>state.value:{this.state.value}</h3>
        <button
          onClick={async () =>
            this.setState((state) => ({ ...state, value: state.value + 1 }))
          }
        >
          Click
        </button>
      </>
    );
  }
}
class DemoNoProp extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h3>DemoNoProp</h3>
      </div>
    );
  }
}
class DemoWithProp extends React.Component<{ value: string }, {}> {
  render() {
    return (
      <div>
        <h3>DemoWithProp</h3>
        <h4>props.value:{this.props.value}</h4>
      </div>
    );
  }
}
