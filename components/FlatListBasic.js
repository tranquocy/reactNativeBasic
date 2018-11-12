import React, { Component } from 'react'
import { 
  AppRegistry,
  FlatList,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import mockData from '../data/mockData';
import FlatListItem from './FlatListItem';
import FlatListView from './FlatListView';

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

  _onPressAdd = () => {
    alert('Add Item');
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <FlatListView
          onPressAdd={this._onPressAdd}
        />
        <FlatList
          data={mockData}
          renderItem={({item, index}) => {
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
    marginTop: Platform.OS === 'ios' ? 40 : 0
  },
});
