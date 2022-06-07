import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  useState,
} from 'react';

// state
interface DemoStateContextModel {
  stateValue: number;
  plusStateValue: (value: number) => void;
}
const DemoStateContext = createContext<DemoStateContextModel>({
  stateValue: 1,
  plusStateValue: () => {},
});
// reducer
interface DemoReducerContextModel {
  reducerValue: number;
  // reducerDispatch: Function;
  reducerDispatch: Dispatch<{ type: DemoReducerAction; payload: number }>;
}
const DemoReducerContext = createContext<DemoReducerContextModel>({
  reducerValue: 1,
  reducerDispatch: () => {},
});
enum DemoReducerAction {
  Plus,
}
const demoReducer = (
  state: number,
  action: { type: DemoReducerAction; payload: number },
) => {
  switch (action.type) {
    case DemoReducerAction.Plus:
      return state + action.payload;
  }
};

const DemoFirst = () => {
  const [stateValue, setSataValue] = useState<number>(0);
  const plusStateValue = (value: number) =>
    setSataValue((state) => state + value);
  const [reducerValue, reducerDispatch] = useReducer(demoReducer, 0);
  return (
    <>
      <h3>DemoContextFirst</h3>
      <p>stateValue:[{stateValue}]</p>
      <button onClick={() => plusStateValue(2)}>plusStateValue</button>
      <p>reducerValue:[{reducerValue}]</p>
      <button
        onClick={() =>
          reducerDispatch({ type: DemoReducerAction.Plus, payload: 2 })
        }
      >
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
      <button onClick={() => stateContext.plusStateValue(3)}>
        plusStateCount
      </button>
      <p>reducerValue:[{reducerContext.reducerValue}]</p>
      <button
        onClick={() =>
          reducerContext.reducerDispatch({
            type: DemoReducerAction.Plus,
            payload: 3,
          })
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
