import React from 'react';
import { DemoContextContextModel, DemoContextContext } from "./demo-context-context";
import { DemoContextComponentFirst } from "./demo-context-component-first";
import { DemoContextComponentSecond } from "./demo-context-component-second";

export class DemoContextComponent extends React.Component<{},DemoContextContextModel,{}> {
  constructor(prop: {}) {
    super(prop);
    this.state = {
      count: 0,
      plusCount: () => {
        this.setState(state => ({
          ...this.state,
          count: this.state.count + 1
        }))
      }
     };
    console.log(`TestComponent constructor`);
  }
  render() {
    return (
    <DemoContextContext.Provider value={this.state}>
      <button onClick={() => { this.state.plusCount() }}>TestComponent Provider:[{this.state.count}]</button>
      <DemoContextContext.Consumer>
        {({ count, plusCount}) => (
          <button onClick={() => { plusCount() }}>TestComponent Consumer:[{count}]</button>
        )}
      </DemoContextContext.Consumer>
      <DemoContextComponentFirst />
      <DemoContextComponentSecond />
    </DemoContextContext.Provider>
    );
  }
}
