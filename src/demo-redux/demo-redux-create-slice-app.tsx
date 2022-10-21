import { useDispatch, useSelector } from 'react-redux';

import {
  actionIncrement,
  actionDecrement,
  actionIncrementPayload,
  actionDecrementPayload,
} from './demo-redux-create-slice';
import { commonAction, commonThunk } from './demo-redux-common';
import { StoreDispatch, StoreState } from './demo-redux-store';

function DemoFirst() {
  const dispatch = useDispatch<StoreDispatch>();
  const countValue = useSelector(
    (state: StoreState) => state.createSlice.value,
  );
  const handleIncrement = () => {
    dispatch(actionIncrement());
  };
  const handleDecrement = () => {
    dispatch(actionDecrement());
  };
  const handleCommonAction = () => {
    dispatch(commonAction('value'));
  };
  const handleCommonThunk = () => {
    dispatch(commonThunk('value'));
  };
  return (
    <>
      <div>countValue:[{countValue}]</div>
      <button onClick={handleIncrement}>actionIncrement</button>
      <button onClick={handleDecrement}>actionDecrement</button>
      <button onClick={handleCommonAction}>CommonAction</button>
      <button onClick={handleCommonThunk}>CommonThunk</button>
    </>
  );
}

function DemoSecond() {
  const dispatch = useDispatch();
  const countValue = useSelector(
    (state: StoreState) => state.createSlice.value,
  );
  const handleIncrement = () => {
    dispatch(actionIncrement());
  };
  const handleDecrement = () => {
    dispatch(actionDecrement());
  };
  const handleIncrementPayload = () => {
    dispatch(actionIncrementPayload(2));
  };
  const handleDecrementPayload = () => {
    dispatch(actionDecrementPayload(2));
  };
  return (
    <>
      <div>countValue:[{countValue}]</div>
      <button onClick={handleIncrement}>actionIncrement</button>
      <button onClick={handleDecrement}>actionDecrement</button>
      <button onClick={handleIncrementPayload}>actionIncrementPayload</button>
      <button onClick={handleDecrementPayload}>actionDecrementPayload</button>
    </>
  );
}

export function DemoReduxCreateSliceApp() {
  return (
    <>
      <h3>DemoReduxCreateSliceApp</h3>
      <h4>DemoFirst</h4>
      <DemoFirst />
      <h4>DemoSecond</h4>
      <DemoSecond />
    </>
  );
}
