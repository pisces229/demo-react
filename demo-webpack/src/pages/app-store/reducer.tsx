import { useDispatch, useSelector } from 'react-redux';
import { commonAction, commonThunk } from '@/stores/app-redux/common';
import {
  actionDecrement,
  actionDecrementPayload,
  actionIncrement,
  actionIncrementPayload,
} from '@/stores/app-redux/create-reducer';

import { StoreDispatch, StoreState } from '@/stores/app-redux/store';

const FirstIndex = () => {
  const dispatch = useDispatch<StoreDispatch>();
  const countValue = useSelector(
    (state: StoreState) => state.firstReducer.value,
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
      <h3>First</h3>
      <div>countValue:[{countValue}]</div>
      <button onClick={handleIncrement}>actionIncrement</button>
      <button onClick={handleDecrement}>actionDecrement</button>
      <button onClick={handleCommonAction}>CommonAction</button>
      <button onClick={handleCommonThunk}>CommonThunk</button>
    </>
  );
};

const SecondIndex = () => {
  const dispatch = useDispatch();
  const countValue = useSelector(
    (state: StoreState) => state.firstReducer.value,
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
      <h3>Second</h3>
      <div>countValue:[{countValue}]</div>
      <button onClick={handleIncrement}>actionIncrement</button>
      <button onClick={handleDecrement}>actionDecrement</button>
      <button onClick={handleIncrementPayload}>actionIncrementPayload</button>
      <button onClick={handleDecrementPayload}>actionDecrementPayload</button>
    </>
  );
};

const Index = () => {
  return (
    <>
      <FirstIndex></FirstIndex>
      <SecondIndex></SecondIndex>
    </>
  );
};

export default Index;
