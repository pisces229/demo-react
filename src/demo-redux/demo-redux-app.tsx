import { Provider } from 'react-redux';
import { DemoReduxCreateReducerApp } from './demo-redux-create-reducer-app';
import { DemoReduxCreateSliceApp } from './demo-redux-create-slice-app';
import { store } from './demo-redux-store';

export function DemoReduxApp() {
  return (
    <Provider store={store}>
      <DemoReduxCreateReducerApp />
      <DemoReduxCreateSliceApp />
    </Provider>
  );
}
