import React, { Component } from 'react'

import { connect } from 'react-redux'

import LoginScreen from '../pages/Login'
import TabScreen from '../pages/TabNavigation'

console.disableYellowBox = true

class Router extends Component {

  render() {
    if (this.props.login.isLogin) {
      return <TabScreen />
    } else {
      return <LoginScreen />
    }
  }
}

let mapStateToProps = state => {
  const { login } = state
  return { login }
}

export default connect(mapStateToProps)(Router)
