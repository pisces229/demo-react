import React, { useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { commonAction } from "./demo-redux-action";
// createReducer
// import {
//   countActionDecrement,
//   countActionDecrementPayload,
//   countActionIncrement,
//   countActionIncrementPayload,
//   store,
//   StoreState
// } from './demo-redux-create-reducer';
// createSlice
import {
  countActionIncrement,
  countActionDecrement,
  countActionIncrementPayload,
  countActionDecrementPayload,
} from "./demo-redux-count-slice";
import { store, StoreState } from "./demo-redux-store";
// thunk
import { apiDefaultTest } from "./demo-redux-thunk";

function DemoReduxAppFirst() {
  const dispatch = useDispatch();
  const countValue = useSelector(
    (state: StoreState) => state.rootReducer.count.value
  );
  const handleIncrement = () => {
    dispatch(countActionIncrement());
  };
  const handleDecrement = () => {
    dispatch(countActionDecrement());
  };
  const handleCommonAction = () => {
    dispatch(commonAction("value"));
  };
  const handleApiDefaultTest = () => {
    dispatch(apiDefaultTest("value"));
  };
  return (
    <>
      <div>DemoReduxAppFirst countValue:[{countValue}]</div>
      <button onClick={handleIncrement}>countActionIncrement</button>
      <button onClick={handleDecrement}>countActionDecrement</button>
      <button onClick={handleCommonAction}>commonAction</button>
      <button onClick={handleApiDefaultTest}>apiDefaultTest</button>
    </>
  );
}

function DemoReduxAppSecond() {
  const dispatch = useDispatch();
  const countValue = useSelector(
    (state: StoreState) => state.rootReducer.count.value
  );
  const handleIncrement = () => {
    dispatch(countActionIncrement());
  };
  const handleDecrement = () => {
    dispatch(countActionDecrement());
  };
  const handleIncrementPayload = () => {
    dispatch(countActionIncrementPayload(2));
  };
  const handleDecrementPayload = () => {
    dispatch(countActionDecrementPayload(2));
  };
  return (
    <>
      <div>DemoReduxAppSecond countValue:[{countValue}]</div>
      <button onClick={handleIncrement}>countActionIncrement</button>
      <button onClick={handleDecrement}>countActionDecrement</button>
      <button onClick={handleIncrementPayload}>
        countActionIncrementPayload
      </button>
      <button onClick={handleDecrementPayload}>
        countActionDecrementPayload
      </button>
    </>
  );
}

export function DemoReduxApp() {
  return (
    <Provider store={store}>
      <DemoReduxAppFirst />
      <DemoReduxAppSecond />
    </Provider>
  );
}
