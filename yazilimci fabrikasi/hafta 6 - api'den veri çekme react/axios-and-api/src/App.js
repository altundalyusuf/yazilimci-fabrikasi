import React, { Component } from 'react'
import Header from './Header'
import Users from './Users'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Users />
      </div>
    )
  }
}
