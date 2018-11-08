import React, { Component } from 'react'
import { AppRegistry, FlatList, View, StyleSheet, Text } from 'react-native';
import mockData from '../data/mockData';

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.index % 2 == 0 ? '#eb4947' : '#ff000'
        }}
      >
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.desc}</Text>
      </View>
    )
  }
}

export default class FlatListBasic extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <FlatList
          data={
            [
              {
                key: 'a',
                name: "Nokia",
                desc: 'This is a Nokia'
              },
              {
                key: 'b',
                name: "iPhone",
                desc: 'This is a iPhone'
              }
            ]
          }
          renderItem={({item}) => {
            return (
              <FlatListItem item={item}>
              
              </FlatListItem>
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
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    color: '#fff',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10
  },
});
