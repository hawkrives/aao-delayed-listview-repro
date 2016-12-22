// @flow
import React from 'react'
import {items as defaultItems} from './data'
import {List} from './list'

export class Instant extends React.Component {
  state = {
    foodItems: defaultItems,
  }

  render() {
    return (
      <List data={this.state.foodItems} />
    )
  }
}
