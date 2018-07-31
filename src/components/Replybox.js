import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { WINDOW_WIDTH } from '../public'

export default class extends Component {
  state = {
    speakerMode: false
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
  }

  render() {
    const leftIcon = this.state.speakerMode
      ? require('../images/keyboard.png')
      : require('../images/speak.png')

    return (
      <View
        style={[
          {
            width: WINDOW_WIDTH,
            height: 50,
            flexDirection: 'row',
            backgroundColor: '#rgba(245, 245, 245, 1.00)'
          },
          this.props.style
        ]}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: '#rgba(231, 231, 231, 1.00)'
            // backgroundColor: 'black'
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            this.setState({ speakerMode: !this.state.speakerMode })
            this.timeout = setTimeout(() => {
              !this.state.speakerMode &&
                this.textInput &&
                this.textInput.focus()
            }, 50)
          }}
        >
          <Image source={leftIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        {this.state.speakerMode ? (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#rgba(245, 245, 245, 1.00)',
              marginVertical: 8,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#rgba(210, 210, 210, 1.00)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>按住说话</Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={{
              flex: 1,
              backgroundColor: 'white',
              marginVertical: 8,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#rgba(231, 231, 231, 1.00)'
            }}
            returnKeyType='done'
            onSubmitEditing={() => {
              this.textInput.clear()
              this.props.onSubmitEditing && this.props.onSubmitEditing()
            }}
            onChangeText={this.props.onChangeText}
            ref={r => (this.textInput = r)}

          />
        )}
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../images/emoji.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
