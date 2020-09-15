import * as React from 'react';
import {View, Text, Button} from 'react-native';

export const CounterComponent: React.SFC<{}> = () => {
  let previousCount = React.useRef(0);
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    previousCount.current = count;
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Current Count: {count}</Text>
      <Text>Previous Count: {previousCount.current}</Text>
      <Button title="increment count" onPress={incrementCount} />
    </View>
  );
};
