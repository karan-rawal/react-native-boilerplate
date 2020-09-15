import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export const CounterComponent: React.SFC<{}> = () => {
  let previousCount = React.useRef(0);
  const textInputRef = React.useRef<TextInput>(null);
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    previousCount.current = count;
    setCount(count + 1);
  };

  const doFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <View>
      <Text>Current Count: {count}</Text>
      <Text>Previous Count: {previousCount.current}</Text>
      <Button title="increment count" onPress={incrementCount} />

      <TextInput ref={textInputRef} placeholder="Some random textinput" />
      <Button title="Focus" onPress={doFocus} />
    </View>
  );
};
