import React from 'react';

// export class DemoComponentLazy extends React.Component<{},{}>{
//   constructor(props: {}) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     // throw new Error();
//     return (
//       <>
//         <h1>DemoDefaultLazyComponent</h1>
//       </>
//     );
//   }
// }

export function DemoComponentLazy() {
  // throw new Error();
  // eslint-disable-next-line no-unreachable
  return (
    <>
      <h1>DemoComponentLazy</h1>
    </>
  );
}
