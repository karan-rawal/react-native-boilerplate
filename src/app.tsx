import * as React from 'react';
import {Provider} from 'react-redux';
import {AppRoutes} from './app.routes';
import {store} from './redux/store';

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
