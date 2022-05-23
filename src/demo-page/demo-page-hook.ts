import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

// useCommonRouteGuard
export const useCommonRouteGuard = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(`useEffect[location]:${JSON.stringify(location)}`);
    // do something
  }, [location]);
};
// commonChangeEvent
export const commonChangeEvent = <T>(data: T) => {
  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case 'text': {
        data = { ...data, [e.target.name]: e.target.value };
        break;
      }
      case 'checkbox': {
        if (e.target.value === 'on') {
          data = { ...data, [e.target.name]: e.target.checked };
        } else {
          let value = [...(data as any)[e.target.name]];
          if (e.target.checked) {
            if (!value.includes(e.target.value)) {
              value.push(e.target.value);
            }
          } else {
            if (value.includes(e.target.value)) {
              value.splice(value.indexOf(e.target.value), 1);
            }
          }
          data = { ...data, [e.target.name]: value };
        }
        break;
      }
      case 'radio': {
        data = { ...data, [e.target.name]: e.target.value };
        break;
      }
      case 'file': {
        if (e.target.files!.length! > 0) {
          data = { ...data, [e.target.name]: e.target.files };
        } else {
          data = { ...data, [e.target.name]: null };
        }
        break;
      }
    }
    return data;
  };
  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.multiple) {
      data = { ...data, [e.target.name]: e.target.value };
    } else {
      const value: string[] = [];
      for (let i = 0; i < e.target.options.length; ++i) {
        if (e.target.options[i].selected) {
          value.push(e.target.options[i].value);
        }
      }
      data = { ...data, [e.target.name]: value };
    }
    return data;
  };
  const textarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    return { ...data, [e.target.name]: e.target.value };
  };
  return { input, select, textarea };
};
// useCommonBindStateValue
export const useCommonBindStateValue = <T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
) => {
  const input = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...commonChangeEvent(state).input(e) });
  const select = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setState({ ...commonChangeEvent(state).select(e) });
  const textarea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setState({ ...commonChangeEvent(state).textarea(e) });
  return { input, select, textarea };
};
// useCommonBindStateArray
export const useCommonBindStateArray = <T>(
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>,
) => {
  const input = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    state[index] = commonChangeEvent(state[index]).input(e);
    setState([...state]);
  };
  const select =
    (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      state[index] = commonChangeEvent(state[index]).select(e);
      setState([...state]);
    };
  const textarea =
    (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      state[index] = commonChangeEvent(state[index]).textarea(e);
      setState([...state]);
    };
  return { input, select, textarea };
};
// useCommonBindStoreStateValue
export const useCommonBindStoreStateValue = <T>(
  storeState: T,
  action: ActionCreatorWithPayload<T>,
) => {
  const dispatch = useDispatch();
  const input = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(action({ ...commonChangeEvent(storeState).input(e) }));
  const select = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(action({ ...commonChangeEvent(storeState).select(e) }));
  const textarea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(action({ ...commonChangeEvent(storeState).textarea(e) }));
  return { input, select, textarea };
};
// useCommonBindStateArray
export const useCommonBindStoreStateArray = <T>(
  storeState: T[],
  action: ActionCreatorWithPayload<T[]>,
) => {
  const dispatch = useDispatch();
  const input = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    storeState[index] = commonChangeEvent(storeState[index]).input(e);
    dispatch(action([...storeState]));
  };
  const select =
    (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      storeState[index] = commonChangeEvent(storeState[index]).select(e);
      dispatch(action([...storeState]));
    };
  const textarea =
    (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      storeState[index] = commonChangeEvent(storeState[index]).textarea(e);
      dispatch(action([...storeState]));
    };
  return { input, select, textarea };
};
