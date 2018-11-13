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
import horizontalFlatListData from '../../data/horizontalFlatListData';
import HorizontalFlatListItem from './HorizontalFlatListItem';

class HorizontalFlatList extends Component {
  render() {
    return (
      <View style={styles.rootViewStyle}>
        <View style={{height: 150}}>
          <FlatList
            style={{backgroundColor: '#000', opacity: 0.5}}
            horizontal={true}
            data={horizontalFlatListData}
            renderItem={({item, index}) => {
              return (
                <HorizontalFlatListItem
                  item={item}
                  index={index}
                  parentFlatList={this}
                />
              )
            }}
          >
          </FlatList>
        </View>
      </View>
    );
  }
}

export default HorizontalFlatList;

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 34 : 0
  }
})
