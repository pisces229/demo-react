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
  const onClickPlus = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
    dispatch({ type: ReducerAction.Plus, payload: 1 });
  };
  const onClickReset = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
    dispatch({ type: ReducerAction.Reset });
  };
  return (
    <>
      <h2>DemoHookReducer</h2>
      <p>Action:[{state.action}]</p>
      <p>Count:[{state.count}]</p>
      <button onClick={onClickPlus}>Plus</button>
      <button onClick={onClickReset}>Reset</button>
    </>
  );
}
