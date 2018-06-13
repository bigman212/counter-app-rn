import React from 'react';
import {View} from 'react-native';
import CounterScreen from './screens/CounterScreen';

export default class App extends React.Component {
  render() {
    return (
      <CounterScreen defaultValue={0} />
    );
  }
}
