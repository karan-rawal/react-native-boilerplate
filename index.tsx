/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

declare const global: {HermesInternal: null | {}};

AppRegistry.registerComponent(appName, () => App);
