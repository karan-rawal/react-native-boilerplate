import * as React from 'react';
import {AppRoutes} from './app.routes';

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return <AppRoutes />;
};

export default App;
