import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    const inputAccessoryViewID = "uniqueID";
    return (
      <View>
        <TextInput
          style={styles.textInput}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    color: '#222',
    padding: 10,
    marginBottom: 20,
    width: 300
  },
  red: {
    color: 'red',
  },
});
