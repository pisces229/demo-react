import { useReducer } from 'react';

enum ReducerAction {
  Empty = '',
  Plus = 'Plus',
  Reset = 'Reset',
}
interface ReducerState {
  action: ReducerAction;
  count: number;
}
const reducerState: ReducerState = {
  action: ReducerAction.Empty,
  count: 0,
};
const reducer = (
  state: ReducerState,
  action: { type: ReducerAction; payload?: number },
) => {
  switch (action.type) {
    case ReducerAction.Plus:
      return {
        ...state,
        action: action.type,
        count: state.count + action.payload!,
      };
    case ReducerAction.Reset:
      return {
        ...state,
        action: action.type,
        count: 0,
      };
    default:
      return {
        ...state,
        action: ReducerAction.Empty,
      };
  }
};

export function DemoHookReducer() {
  const [state, dispatch] = useReducer(reducer, reducerState);
  return (
    <>
      <h2>DemoHookReducer</h2>
      <p>Action:[{state.action}]</p>
      <p>Count:[{state.count}]</p>
      <button
        onClick={() => dispatch({ type: ReducerAction.Plus, payload: 1 })}
      >
        Plus
      </button>
      <button onClick={() => dispatch({ type: ReducerAction.Reset })}>
        Reset
      </button>
    </>
  );
}
