import { createContext, Dispatch, useContext, useReducer, useState } from 'react';

// state
interface StateContextModel {
  stateValue: number;
  plusStateValue: (value: number) => void;
}
const StateContext = createContext<StateContextModel>({
  stateValue: 1,
  plusStateValue: () => Function,
});
// reducer
interface ReducerContextModel {
  reducerValue: number;
  // reducerDispatch: Function;
  reducerDispatch: Dispatch<{ type: ReducerAction; payload: number }>;
}
const ReducerContext = createContext<ReducerContextModel>({
  reducerValue: 1,
  reducerDispatch: () => Function,
});
enum ReducerAction {
  Plus,
}
const demoReducer = (state: number, action: { type: ReducerAction; payload: number }) => {
  switch (action.type) {
    case ReducerAction.Plus:
      return state + action.payload;
  }
};

const First = () => {
  const [stateValue, setSataValue] = useState<number>(0);
  const plusStateValue = (value: number) => setSataValue((state) => state + value);
  const [reducerValue, reducerDispatch] = useReducer(demoReducer, 0);
  return (
    <>
      <h4>First</h4>
      <p>stateValue:[{stateValue}]</p>
      <button onClick={() => plusStateValue(2)}>plusStateValue</button>
      <p>reducerValue:[{reducerValue}]</p>
      <button onClick={() => reducerDispatch({ type: ReducerAction.Plus, payload: 2 })}>ReducerAction.Plus</button>
      <StateContext.Provider value={{ stateValue, plusStateValue }}>
        <ReducerContext.Provider value={{ reducerValue, reducerDispatch }}>
          <Second />
        </ReducerContext.Provider>
      </StateContext.Provider>
    </>
  );
};

const Second = () => {
  const stateContext = useContext(StateContext);
  const reducerContext = useContext(ReducerContext);
  return (
    <>
      <h4>Second</h4>
      <p>stateValue:[{stateContext.stateValue}]</p>
      <button onClick={() => stateContext.plusStateValue(3)}>plusStateCount</button>
      <p>reducerValue:[{reducerContext.reducerValue}]</p>
      <button
        onClick={() =>
          reducerContext.reducerDispatch({
            type: ReducerAction.Plus,
            payload: 3,
          })
        }
      >
        ReducerAction.Plus
      </button>
    </>
  );
};

const Index = () => {
  return (
    <>
      <h3>Context</h3>
      <h4>Context Scope 1</h4>
      <First />
      <h4>Context Scope 2</h4>
      <First />
    </>
  );
};
export default Index;
