import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Platform
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import Loader from '../components/Loader'

import { login, showld, dissld, showerr, disserr } from '../actions/loginAction'
import { themeColor, WINDOW_WIDTH, WINDOW_HEIGHT } from '../public'
import PCButton from '../components/PCButton'
import { UserAuth } from '../net/fetch'

class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = { select: 0 }

  login = () => {
    const { dispatch } = this.props
    const user = {
      name: this.user,
      pwd: this.pwd
    }
    dispatch(showld())
    UserAuth(user)
      .then(() => {
        dispatch(dissld())
        dispatch(login())
      })
      .catch(() => {
        dispatch(showerr())
        this.timeout = setTimeout(() => {
          dispatch(disserr())
        }, 1000)
        // alert('账号密码错误')
      })
  }
  componentDidMount() {
    const showName = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow'
    const dissName = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide'
    this.keyboardShow = Keyboard.addListener(showName, () => {
      this.scrollView &&
        this.scrollView.scrollTo({
          y: (WINDOW_HEIGHT * 2) / 10,
          animated: true
        })
    })
    this.keyboardHide = Keyboard.addListener(dissName, () => {
      this.scrollView &&
        this.scrollView.scrollTo({
          y: 0,
          animated: true
        })
    })
  }

  componentWillUnmount() {
    this.keyboardShow && this.keyboardShow.remove()
    this.keyboardHide && this.keyboardHide.remove()
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        ref={r => this.scrollView = r}
      >
        <View style={styles.header}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: themeColor }}>
            PCAN
          </Text>
          <Text style={{ fontSize: 30, color: themeColor }}>拼餐</Text>
        </View>
        <View style={styles.form}>
          <View
            style={{
              height: 44,
              width: WINDOW_WIDTH,
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <PCButton
              text="登录"
              style={{
                width: 150,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              underLine={this.state.select === 0}
              underLineColor={themeColor}
            />
            <PCButton
              text="注册"
              style={{
                width: 150,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              underLine={this.state.select === 1}
              underLineColor={themeColor}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 49
            }}
          >
            <View
              style={{ width: WINDOW_WIDTH - 60, height: 44, marginBottom: 10 }}
            >
              <TextInput
                placeholder="账号"
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={value => (this.user = value)}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  backgroundColor: 'lightgray'
                }}
              />
            </View>
            <View
              style={{ width: WINDOW_WIDTH - 60, height: 44, marginBottom: 42 }}
            >
              <TextInput
                placeholder="密码"
                secureTextEntry
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={value => (this.pwd = value)}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  backgroundColor: 'lightgray'
                }}
              />
            </View>
            <Button
              buttonStyle={{ width: 203, height: 44, marginBottom: 15 }}
              textStyle={{ color: 'black', fontSize: 15 }}
              backgroundColor={themeColor}
              title="确定"
              onPress={this.login}
            />
            <TouchableOpacity
              style={{ width: WINDOW_WIDTH, alignItems: 'flex-end' }}
            >
              <Text style={{ color: 'gray', marginRight: 20 }}>忘记密码？</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdLogin}>
          <View
            style={{
              flexDirection: 'row',
              width: WINDOW_WIDTH - 50,
              alignItems: 'center'
            }}
          >
            <View style={{ height: 1, flex: 1, backgroundColor: 'gray' }} />
            <Text style={{ fontSize: 14, color: 'gray', marginHorizontal: 25 }}>
              第三方登录
            </Text>
            <View style={{ height: 1, flex: 1, backgroundColor: 'gray' }} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 200,
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 30
            }}
          >
            <Icon name="weibo" type="font-awesome" color={themeColor} />
            <Icon name="weixin" type="font-awesome" color={themeColor} />
            <Icon name="qq" type="font-awesome" color={themeColor} />
          </View>
        </View>
        <Loader
          visible={this.props.login.loading || this.props.login.err}
          color={themeColor}
          error={this.props.login.err}
          errorText="登录失败"
        />
      </ScrollView>
    )
  }
}

let mapStateToProps = state => {
  const { login } = state
  return { login }
}

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: (WINDOW_HEIGHT * 3) / 10
  },
  form: {
    height: (WINDOW_HEIGHT * 4) / 10
  },
  thirdLogin: {
    height: (WINDOW_HEIGHT * 3) / 10,
    marginTop: 67,
    alignItems: 'center'
  }
})
