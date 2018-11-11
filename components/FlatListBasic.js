import React, { Component } from 'react'
import { AppRegistry, FlatList, View, StyleSheet } from 'react-native';
import mockData from '../data/mockData';
import FlatListItem from './FlatListItem';

export default class FlatListBasic extends Component {
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
    })
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <FlatList
          data={mockData}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <FlatListItem
                item={item}
                index={index}
                data={mockData}
                parentFlatList={this.refreshFlatList}
              />
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
});
