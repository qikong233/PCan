import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class PCButton extends Component {
  state = {
    underLineW: 0
  }

  contentW = 0

  renderUnderLine = () => {
    console.log((this.contentW - this.state.underLineW) / 2)
    if (this.props.underLine) {
      return (
        <View
          style={[
            {
              position: 'absolute',
              height: 4,
              width: this.state.underLineW,
              left: (this.contentW - this.state.underLineW) / 2,
              bottom: 0
            },
            this.props.underLineColor && {
              backgroundColor: this.props.underLineColor
            }
          ]}
        />
      )
    } else return null
  }

  onContentLayout = e => {
    this.contentW = e.nativeEvent.layout.width
  }

  onTextLayout = e => {
    let width = e.nativeEvent.layout.width
    this.timeout = setTimeout(() => {
      this.setState({ underLineW: width + 15 })
    }, 5)
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onLayout={this.onContentLayout}
      >
        <Text onLayout={this.onTextLayout}>{this.props.text}</Text>
        {this.renderUnderLine()}
      </TouchableOpacity>
    )
  }
}
