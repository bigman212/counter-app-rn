import {GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';

interface ButtonProps {
  text: string;
  style?: any;
  onPress: (e: GestureResponderEvent) => void;
}

const CounterButton = ({text, style, onPress}: ButtonProps) => (
  <View style={style ? style : ''}>
    <TouchableOpacity onPress={onPress}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default CounterButton;