import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./demo-redux-root-reducer";

export const store = configureStore({
  reducer: {
    rootReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // preloadedState,
});
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
