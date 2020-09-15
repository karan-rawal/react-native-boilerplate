import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const calculateInitialCount = () => {
  console.log('Something heavy is going on in here.');
  return 0;
};

export const CounterComponent: React.SFC<{}> = () => {
  let previousCount = React.useRef(0);
  const textInputRef = React.useRef<TextInput>(null);
  const textInputCallbackRef = React.useCallback((ref: TextInput) => {
    ref?.blur();
  }, []);
  const [count, setCount] = React.useState(() => calculateInitialCount());

  const incrementCount = React.useCallback(() => {
    setCount((prevState) => {
      previousCount.current = prevState;
      return prevState + 1;
    });
  }, []);

  const doFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <View>
      <TextInput
        ref={textInputCallbackRef}
        placeholder="Callback ref textInput"
      />

      <Text>Current Count: {count}</Text>
      <Text>Previous Count: {previousCount.current}</Text>
      <Button title="increment count" onPress={incrementCount} />

      <TextInput ref={textInputRef} placeholder="Some random textinput" />
      <Button title="Focus" onPress={doFocus} />
    </View>
  );
};
