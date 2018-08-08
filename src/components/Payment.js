import React, { Component } from 'react'
import { View, TouchableOpacity, Modal, Animated, Text, Image } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import Spin from 'react-native-spinkit'
import { themeColor, WINDOW_WIDTH, WINDOW_HEIGHT, isIPX } from '../public'

export default class Payment extends Component {
  anim = new Animated.Value(WINDOW_HEIGHT * 0.5)

  state = {
    payLoading: false,
    paySuccess: false
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return
    nextProps.visible === true &&
      Animated.timing(this.anim, {
        duration: 350,
        toValue: 0
      }).start()
  }

  payment = () => {
    this.setState({ payLoading: true })
    this.timeout = setTimeout(() => {
      this.setState({ paySuccess: true })
    }, 1500)
  }
  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
    this.donePay && clearTimeout(this.donePay)
  }

  renderSuccess = () => {
    if (this.state.paySuccess) {
      this.donePay = setTimeout(() => {
        this.props.donePay && this.props.donePay()
      }, 1000)
      return (
        <View style={{ alignItems: 'center', marginTop: WINDOW_HEIGHT * 0.15 }}>
          <Text style={{ fontSize: 20 }}>支付成功</Text>
        </View>
      )
    }
  }

  render() {
    const payWay = isIPX ? 'Face ID' : '指纹支付'
    const payImg = isIPX
      ? require('../images/faceID.png')
      : require('../images/finger-print.png')

    return (
      <Modal
        visible={this.props.visible}
        transparent
        animationType="none"
        onRequestClose={() => {}}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#rgba(1,1,1,0.3)',
            justifyContent: 'flex-end'
          }}
        >
          <Animated.View
            style={{
              height: WINDOW_HEIGHT * 0.5,
              backgroundColor: 'white',
              transform: [{ translateY: this.anim }]
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                marginTop: 15,
                paddingHorizontal: 15
              }}
              onPress={() => {
                Animated.timing(this.anim, {
                  toValue: WINDOW_HEIGHT * 0.5,
                  duration: 350
                }).start(() => {
                  this.props.close && this.props.close()
                })
              }}
            >
              <Icon
                name="close-o"
                type="evilicon"
                size={40}
                color={themeColor}
              />
            </TouchableOpacity>
            {this.renderSuccess()}
            <View style={{ alignItems: 'center' }}>
              <Spin
                type="ChasingDots"
                style={{ marginTop: 100 }}
                isVisible={this.state.payLoading && !this.state.paySuccess}
                color={themeColor}
                size={80}
              />
              {this.state.payLoading && !this.state.paySuccess ? (
                <Text style={{ fontSize: 17, marginTop: 40 }}>正在支付...</Text>
              ) : null}
            </View>
            {this.state.payLoading || this.state.paySuccess ? null : (
              <Text
                style={{
                  fontSize: 20,
                  width: WINDOW_WIDTH,
                  textAlign: 'center',
                  marginTop: 50
                }}
              >
                {payWay}
              </Text>
            )}
            {this.state.payLoading || this.state.paySuccess ? null : (
              <View style={{ marginTop: 20, height: WINDOW_WIDTH, alignItems: 'center' }}>
                <Image source={payImg} style={{width: 80, height: 80}}/>
              </View>
            )}
            {this.state.payLoading || this.state.paySuccess ? null : (
              <View
                style={{
                  position: 'absolute',
                  bottom: isIPX ? 54 : 20,
                  right: 0,
                  left: 0
                }}
              >
                <Button
                  title="确定"
                  borderRadius={5}
                  backgroundColor={themeColor}
                  style={{ marginTop: 70 }}
                  onPress={this.payment}
                />
              </View>
            )}
          </Animated.View>
        </View>
      </Modal>
    )
  }
}
