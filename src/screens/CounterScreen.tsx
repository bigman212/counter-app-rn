import Counter from '../components/Counter';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import * as React from 'react';
import CounterButton from '../components/Button';
import {connect, Dispatch} from 'react-redux';
import {StoreState} from '../reducers';

interface CounterScreenProps {
  defaultValue: number;
}

interface CounterScreenState {
  count: number;
}

class CounterScreen extends React.Component<CounterScreenProps, CounterScreenState> {

  constructor(props: CounterScreenProps) {
    super(props);
    console.log(this.state.count);
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
        <View style={styles.counterContainer}>
          <Counter count={this.state.count} />
        </View>
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
  counterContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  wrapper: {
    flex: 4,
    flexDirection: 'column'
  },

  counterContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginBottom: 100
  },

  plusButton: {
    width: 100,
    height: 60,
    backgroundColor: '#35C2FF'
  },

  minusButton: {
    width: 100,
    height: 60,
    backgroundColor: '#ff0a16'

  }
});

const mapStateToProps = (state: StoreState) => state.counterValue;

// Now let's connect our component!
export default connect(mapStateToProps)(CounterScreen);
