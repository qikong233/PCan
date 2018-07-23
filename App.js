import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './src/store/store'
import Router from './src/Router/router'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
