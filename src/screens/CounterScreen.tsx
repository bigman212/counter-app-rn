import Counter from '../components/Counter';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import * as React from 'react';
import CounterButton from '../components/Button';

interface CounterScreenProps {
  defaultValue: number;
}

interface CounterScreenState {
  count: number;
}

class CounterScreen extends React.Component<CounterScreenProps, CounterScreenState> {

  constructor(props: CounterScreenProps) {
    super(props);
    this.state = {count: this.props.defaultValue};
  }

  _onPlusClicked = () => {
    this.setState(
      {count: this.state.count + 1}
    );
  };

  _onMinusClicked = () => {
    if (this.state.count > 0) {
      this.setState(
        {count: this.state.count - 1}
      );
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Counter count={this.state.count} />
        <View style={styles.buttonContainer}>
          <CounterButton style={styles.plusButton} text='+' onPress={this._onPlusClicked} />
          <CounterButton style={styles.minusButton} text='-' onPress={this._onMinusClicked} />
        </View>
      </View>
    );
  }
}

interface Style {
  wrapper: ViewStyle;
  plusButton: TextStyle;
  minusButton: TextStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  minusButton: {
    width: 30,
    height: 30
  },
  plusButton: {
    width: 30,
    height: 30
  },

  wrapper: {
    alignItems: 'center'
  },

  buttonContainer: {
    // backgroundColor: 'black',
    // flex: 1,
    flexDirection: 'row'
    // justifyContent: 'center'
  },

  buttonStyle: {}
});

export default CounterScreen;