import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  useState,
} from 'react';

// state
export interface DemoStateContextModel {
  stateValue: number;
  plusStateValue: Function;
}
export const DemoStateContext = createContext<DemoStateContextModel>({
  stateValue: 1,
  plusStateValue: () => {},
});

// reducer
export interface DemoReducerContextModel {
  reducerValue: number;
  reducerDispatch: Function;
  // reducerDispatch: Dispatch<{ type: DemoReducerAction }>;
}
export const DemoReducerContext = createContext<DemoReducerContextModel>({
  reducerValue: 1,
  reducerDispatch: () => {},
});
enum DemoReducerAction {
  Plus,
}
const demoReducer = (state: number, action: { type: DemoReducerAction }) => {
  switch (action.type) {
    case DemoReducerAction.Plus:
      return state + 1;
  }
};

const DemoFirst = () => {
  const [stateValue, setSataValue] = useState<number>(0);
  const plusStateValue = () => setSataValue((state) => state + 1);
  const [reducerValue, reducerDispatch] = useReducer(demoReducer, 0);
  return (
    <>
      <h3>DemoContextFirst</h3>
      <p>stateValue:[{stateValue}]</p>
      <button onClick={() => plusStateValue()}>plusStateValue</button>
      <p>reducerValue:[{reducerValue}]</p>
      <button onClick={() => reducerDispatch({ type: DemoReducerAction.Plus })}>
        DemoReducerAction.Plus
      </button>
      <DemoStateContext.Provider value={{ stateValue, plusStateValue }}>
        <DemoReducerContext.Provider value={{ reducerValue, reducerDispatch }}>
          <DemoSecond />
        </DemoReducerContext.Provider>
      </DemoStateContext.Provider>
    </>
  );
};

const DemoSecond = () => {
  const stateContext = useContext(DemoStateContext);
  const reducerContext = useContext(DemoReducerContext);
  return (
    <>
      <h3>DemoContextSecond</h3>
      <p>stateValue:[{stateContext.stateValue}]</p>
      <button onClick={() => stateContext.plusStateValue()}>
        plusStateCount
      </button>
      <p>reducerValue:[{reducerContext.reducerValue}]</p>
      <button
        onClick={() =>
          reducerContext.reducerDispatch({ type: DemoReducerAction.Plus })
        }
      >
        DemoReducerAction.Plus
      </button>
    </>
  );
};

export function DemoHookContext() {
  return (
    <>
      <h1>First</h1>
      <DemoFirst />
      <h1>Second</h1>
      <DemoFirst />
    </>
  );
}
