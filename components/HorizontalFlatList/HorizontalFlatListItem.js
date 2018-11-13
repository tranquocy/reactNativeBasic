import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  View,
  Image,
  ImageBackground,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HorizontalFlatListItem extends Component {
  render() {
    const {index, item} = this.props;
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
          {item.hour}
        </Text>
        <Icon name="facebook"></Icon>
        <Text style={styles.textStyle}>
          {item.degrees} &#8451;
        </Text>
      </View>
    );
  }
}

export default HorizontalFlatListItem;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 4
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  }
})
