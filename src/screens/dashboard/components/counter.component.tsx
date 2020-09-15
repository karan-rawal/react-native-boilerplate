import * as React from 'react';
import {View, Text, Button} from 'react-native';

export interface CounterComponentState {
  count: number;
}

export class CounterComponent extends React.Component<
  {},
  CounterComponentState
> {
  previousCount = 0;
  state = {count: 0};

  incrementCount = () => {
    this.previousCount = this.state.count;
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View>
        <Text>Current Count: {this.state.count}</Text>
        <Text>Previous Count: {this.previousCount}</Text>
        <Button title="increment count" onPress={this.incrementCount} />
      </View>
    );
  }
}
