import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {insertNewItemToServer} from '../API/mockAPI';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameItem: '',
      descItem: ''
    }
  }

  showAddModal = () => {
    this.refs.myModal.open();
  }

  handleChangeText = (text) => {
    this.setState({
      nameItem: text,
      descItem: text
    })
  }

  generateKey = (numberOfCharacter) => {
    return require('random-string')({length: numberOfCharacter});
  }

  addItem = () => {
    if(this.state.nameItem == 0 && this.state.descItem == 0) {
      alert('You should enter name & desc');
      return;
    }
    const newKey = this.generateKey(24);
    const newIem = {
      key: newKey,
      name: this.state.nameItem,
      desc: this.state.descItem
    }
    insertNewItemToServer(newIem).then(() => {
      this.props.parentFlatList.refreshDataFromServer();
    });
    this.refs.myModal.close();
  }

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.modalStyle}
        position='center'
        backdrop={true}
        onClosed={() => {
          // alert('Modal closed');
        }}
      >
        <Text style={styles.textStyle}>New item infomation</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder='Enter new item name'
          value={this.state.nameItem}
          onChangeText={
            (text) => {
              this.setState({
                nameItem: text
              })
            }
          }
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Enter new item desc'
          value={this.state.descItem}
          onChangeText={
            (text) => {
              this.setState({
                descItem: text
              })
            }
          }
        />
        <Button
          style={styles.buttonStyle}
          onPress={this.addItem}
        >
          Save
        </Button>
      </Modal>
    )
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
