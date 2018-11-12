import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null
    }
  }

  render() {
    const {item, data, index, parentFlatList} = this.props;

    const swiperSetting = {
      autoClose: true,
      onClose: (secID, rowID, direction) => {
        if(this.state.activeRowKey = !null) {
          this.setState({
            activeRowKey: null
          })
        }
      },
      onOpen: (secID, rowID, direction) => {
        this.setState({
          activeRowKey: item.key
        })
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Do you want to delete this item?',
              [
                {
                  text: 'No', onPress: () => console.log('Cancel delete'), style: 'cancel'
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    data.splice(index, 1);
                    // Refresh FlatList
                    parentFlatList(deletingRow)
                  }
                }
              ],
              { cancelabel: true }
            )
          },
          text: 'Delete',
          type: 'delete',
        }
      ],
      rowID: index,
      sectionID: 1,
    };

    return (
      <Swipeout
        {...swiperSetting}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#2bb673',
            }}
          >
            <Image
              source={{uri: item.imgSrc}}
              style={{width: 100, height: 100, margin: 5}}
            >
            </Image>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItem: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.colorTextStyle}>{item.name}</Text>
              <Text style={styles.colorTextStyle}>{item.desc}</Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#fff'
            }}
          >

          </View>
        </View>
      </Swipeout>
    )
  }
}

const styles = StyleSheet.create({
  colorTextStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 16
  },
});

export default FlatListItem;