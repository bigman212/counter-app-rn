import React from 'react';
import CounterScreen from './screens/CounterScreen';
import {Provider} from 'react-redux';
import store from './config/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    );
  }
}
