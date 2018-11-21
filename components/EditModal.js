import React, { Component } from 'react';
import {
  AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
  Platform, TouchableHighlight, Dimensions,
  TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import mockData from '../data/mockData';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameItem: '',
      desc: ''
    };
  }

  updateItem = () => {
    if (this.state.nameItem.length == 0 || this.state.desc.length == 0) {
      alert("You must enter item's name and description");
      return;
    }
   //Update existing Item
   var foundIndex = mockData.findIndex(item => this.state.key == item.key);
   if (foundIndex < 0) {
    return; //not found
   }
   mockData[foundIndex].name = this.state.nameItem;
   mockData[foundIndex].desc = this.state.desc;
   //Refresh flatlist item
   this.state.flatlistItem.refreshFlatListItem();
   this.refs.myModal.close();
  }

  showEditModal = (editingItem, flatlistItem) => {
    this.setState({
      key: editingItem.key,
      nameItem: editingItem.name,
      desc: editingItem.desc,
      flatlistItem: flatlistItem
    });
    this.refs.myModal.open();
  }
  generateKey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters});
  }
  render() {
    return (
      <Modal
        ref={"myModal"}
        style={styles.modalStyle}
        position='center'
        backdrop={true}
        onClosed={() => {
          // alert("Modal closed");
        }}
      >
        <Text style={styles.textStyle}>Item's information</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ nameItem: text })}
          placeholder="Enter item's name"
          value={this.state.nameItem}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ desc: text })}
          placeholder="Enter item's description"
          value={this.state.desc}
        />
        <Button
          style={styles.buttonStyle}
          onPress={this.updateItem}>
          Save
        </Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 300,
  },
  textStyle: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  inputStyle: {
    height: 40,
    borderBottomColor: '#ccc',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    fontSize: 14,
  },
  buttonStyle: {
    padding: 8,
    backgroundColor: '#eb4947',
    marginLeft: 70,
    marginRight: 70,
    height: 40,
    borderRadius: 5,
    fontSize: 14,
    color: '#fff'
  }
});
