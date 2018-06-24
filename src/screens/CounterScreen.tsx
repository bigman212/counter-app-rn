import Counter from '../components/Counter';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import * as React from 'react';
import CounterButton from '../components/Button';
import {connect} from 'react-redux';
import {decCounter, incCounter} from '../actions/actions';
import StorageInstance from '../storage/Storage';
import {Constants} from '../constants';

interface CounterScreenProps {
  count: number;
  fetched: number;
  plusClicked: () => void;
  minusClicked: () => void;
}

class CounterScreen extends React.Component<CounterScreenProps, {}> {

  constructor(props: any) {
    super(props);
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }

  valueHasChanged = () => {
    StorageInstance.getInstance().setItem(Constants.Storage.COUNTER_VALUE_KEY, this.props.count.toString())
      .catch(error => console.log(error));
  };

  _onPlusClicked = () => {
    this.props.plusClicked();
    this.valueHasChanged();
  };

  _onMinusClicked = () => {
    this.props.minusClicked();
    this.valueHasChanged();
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.counterContainer}>
          <Counter count={this.props.count} />
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

const mapStateToProps = (state: any) => ({
  count: state.counter.value,
  fetched: state.counter.fetched
});

const mapDispatchToProps = {
  plusClicked: incCounter,
  minusClicked: decCounter
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CounterScreen);