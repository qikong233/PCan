import React, { Component } from 'react'
import { Modal, View, Text } from 'react-native'
import Spinner from 'react-native-spinkit'
import { Icon } from 'react-native-elements'

export default class Loader extends Component {
  render() {
    return (
      <Modal visible={this.props.visible} animationType="fade" onRequestClose={() => {}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.props.color
          }}
        >
          {!this.props.error && (
            <Spinner
              type={this.props.type || 'Bounce'}
              size={60}
              color={'white'}
              style={{ zIndex: 5 }}
            />
          )}
          {this.props.error && (
            <View style={{ alignItems: 'center' }}>
              <Icon
                name="close"
                type="font-awesome"
                color="#rgba(62, 62, 62, 1.00)"
                size={50}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  color: '#rgba(62, 62, 62, 1.00)'
                }}
              >
                {this.props.errorText}
              </Text>
            </View>
          )}
        </View>
      </Modal>
    )
  }
}
