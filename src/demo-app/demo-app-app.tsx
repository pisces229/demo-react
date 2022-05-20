import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './demo-app-redux';
import { DemoAppRouter } from './demo-app-router';

export function DemoAppApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DemoAppRouter />
      </BrowserRouter>
    </Provider>
  );
}
