// @flow
import React from 'react'
import {items as defaultItems} from './data'
import {List} from './list'

export class Delayed extends React.Component {
  state = {
    foodItems: [],
  }

  componentWillMount() {
    setTimeout(() => this.setState({foodItems: defaultItems}), 1000)
  }

  render() {
    return (
      <List data={this.state.foodItems} />
    )
  }
}
