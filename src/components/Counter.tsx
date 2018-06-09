import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

interface CounterProps {
  count: number;
}

interface Style {
  counterStyle: ViewStyle;
}

const Counter: React.SFC<CounterProps> = props => {
  return (
    <View style={styles.counterStyle}>
      <Text style={{textAlign: 'center', fontSize: 16}}>{props.count.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  counterStyle: {
    height: 20,
    width: 20,
    backgroundColor: 'red'
  }
});
export default Counter;
