import React, { Component } from 'react'
import {
  AppRegistry,
  FlatList,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import {getItemFromServer} from '../API/mockAPI';
import FlatListItem from './FlatListItem';
import FlatListView from './FlatListView';
import AddModal from './AddModal';
import EditModal from './EditModal';

export default class FlatListBasic extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      deletedRowKey: null,
      itemsFromServer: []
    });
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }

  refreshDataFromServer = () => {
    getItemFromServer().then((items) => {
      this.setState({itemsFromServer: items})
    }).catch((error) => {
      this.setState({itemsFromServer: []})
    })
  }

  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey,
      }
    });
    this.refs.flatList.scrollToEnd();
  }

  _onPressAdd = () => {
    this.refs.addModal.showAddModal();
  }

  render() {
    console.log(this.state.itemsFromServer);
    return (
      <View style={styles.viewStyle}>
        <FlatListView
          onPressAdd={this._onPressAdd}
        />
        <FlatList
          ref={'flatList'}
          data={this.state.itemsFromServer}
          renderItem={({item, index}) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                data={this.state.itemsFromServer}
                parentFlatList={this}
              />
            )
          }}
        />
        <AddModal ref={'addModal'} parentFlatList={this} />
        <EditModal ref={'editModal'} parentFlatList={this} />
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
