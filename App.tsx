import React from 'react';
import {View, Text} from 'react-native';

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
