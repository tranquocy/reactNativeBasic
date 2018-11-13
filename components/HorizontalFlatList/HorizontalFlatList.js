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
import mockData from '../../data/mockData';
import HorizontalFlatListItem from './HorizontalFlatListItem';

class HorizontalFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      deletedRowKey: null,
    });
  }

  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey,
      }
    });
    this.refs.flatList.scrollToEnd();
  }
  render() {
    return (
      <View style={styles.rootViewStyle}>
        <View style={{height: 150}}>
          <FlatList
            style={{backgroundColor: '#000', opacity: 0.5}}
            horizontal={true}
            data={mockData}
            renderItem={({item, index}) => {
              return (
                <HorizontalFlatListItem
                  item={item}
                  index={index}
                  parentFlatList={this.refreshFlatList}
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
