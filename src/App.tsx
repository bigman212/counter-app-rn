import React from 'react';
import {View} from 'react-native';
import CounterScreen from './screens/CounterScreen';

export default class App extends React.Component {
    render() {
      const newHuman: Human = {name: 'gleb', age: 12};
      return (
          <View>
            <MyText human={newHuman}/>
          </View>
      );
    }
}
