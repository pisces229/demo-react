import React from "react";
import { DemoContextContext } from "./demo-context-context";

export class DemoContextComponentFirst extends React.Component<{},{},{}> {
  static contextType = DemoContextContext;
  context!: React.ContextType<typeof DemoContextContext>;
  //context: React.ContextType<typeof DemoContextContext>;
  // constructor(prop: {}) {
  //   super(prop);
  // }
  render() {
    const {count, plusCount} = this.context;
    return (
      <button onClick={() => { plusCount() }}>TestComponentFirst:[{count}]</button>
    );
  }
}
