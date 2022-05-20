import {
  combineReducers,
  configureStore,
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import {
  CommonModel,
  FirstFormModel,
  FirstGridModel,
  SecondFormModel,
  SecondGridModel,
} from './demo-app-model';

export const commonMessage = createAction('common/message', (value: string) => {
  return {
    payload: value,
  };
});
// slice
const firstSlice = createSlice({
  name: 'first',
  initialState: () => {
    let common: CommonModel = {
      message: 'test',
    };
    let form: FirstFormModel = {
      input: '',
      select: '',
      textarea: '',
    };
    let grid: FirstGridModel[] = [];
    return {
      common,
      form,
      grid,
    };
  },
  reducers: {
    modifyCommonMessage: (state, action: { type: string; payload: string }) => {
      state.common.message = action.payload;
    },
    saveForm: (state, action: { type: string; payload: FirstFormModel }) => {
      state.form = { ...action.payload };
    },
    saveGrid: (state, action: { type: string; payload: FirstGridModel[] }) => {
      state.grid = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(commonMessage, (state, action) => {
      state.common.message = action.payload;
    });
  },
});
// action
export const {
  modifyCommonMessage: firstModifyCommonMessage,
  saveForm: firstSaveForm,
  saveGrid: firstSaveGrid,
} = firstSlice.actions;
// slice
const secondSlice = createSlice({
  name: 'second',
  initialState: () => {
    let common: CommonModel = {
      message: 'test',
    };
    let form: SecondFormModel = {
      input: '',
      select: '',
      textarea: '',
    };
    let grid: SecondGridModel[] = [];
    return {
      common,
      form,
      grid,
    };
  },
  reducers: {
    modifyCommonMessage: (state, action: { type: string; payload: string }) => {
      state.common.message = action.payload;
    },
    saveForm: (state, action: { type: string; payload: SecondFormModel }) => {
      state.form = { ...action.payload };
    },
    saveGrid: (state, action: { type: string; payload: SecondGridModel[] }) => {
      state.grid = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(commonMessage, (state, action) => {
      state.common.message = action.payload;
    });
  },
});
// action
export const {
  modifyCommonMessage: secondModifyCommonMessage,
  saveForm: secondSaveForm,
  saveGrid: secondSaveGrid,
} = secondSlice.actions;
// rootReducer
const rootReducer = combineReducers({
  first: firstSlice.reducer,
  second: secondSlice.reducer,
});
// store
export const store = configureStore({
  reducer: {
    rootReducer,
  },
});
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
