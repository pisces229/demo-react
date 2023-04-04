import { Provider } from 'react-redux';
import { store } from '../../stores/app-redux/store';
import ReducerIndex from './reducer';
import SliceIndex from './slice';

const Index = () => {
  return (
    <Provider store={store}>
      <ReducerIndex />
      <SliceIndex />
    </Provider>
  );
};
export default Index;
