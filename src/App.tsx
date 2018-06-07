/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Component } from 'react'
import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

interface Human {
  name: string,
  age: number
}

interface MyTextProps {
  human: Human
}

const MyText: React.SFC<MyTextProps> = ({human}) => {
  return <Text>{human.name + human.age}</Text>
}

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
