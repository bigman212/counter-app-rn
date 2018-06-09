/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import CounterScreen from './screens/CounterScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <CounterScreen defaultValue={0} />
      </View>
    );
  }
}
