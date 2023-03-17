import './app.css';
import Map from './Map';
import { Provider } from 'react-redux';
import store from './store/index'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Map />
      </Provider>
    </div>
  );
};

export default App;