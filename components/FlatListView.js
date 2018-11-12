import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

class FlatListView extends Component {
  render() {
    const { onPressAdd } = this.props;

    return (
      <View style={styles.viewStyle}>
        <TouchableHighlight
          style={{marginRight: 10}}
          underlayColor='#eb4947'
          onPress={onPressAdd}
        >
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/icon-add.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default FlatListView;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#eb4947',
    height: 55,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
});