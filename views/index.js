import React from 'react'
import {StyleSheet, TabBarIOS} from 'react-native'
import {Instant} from './instant'
import {Delayed} from './delayed'

const tabs = [
  {id: '1', title: 'Instant', component: Instant},
  {id: '2', title: 'Delayed', component: Delayed},
]

export default class TabbedView extends React.Component {
  state = {
    selectedTab: this.props.tabs[0].id,
  }

  render() {
    return (
      <TabBarIOS style={{flex: 1}}>
        {this.props.tabs.map(tab =>
          <TabBarIOS.Item
            key={tab.id}
            translucent
            title={tab.title}
            selected={this.state.selectedTab === tab.id}
            onPress={() => this.setState({selectedTab: tab.id})}
          >
            <tab.component />
          </TabBarIOS.Item>)}
      </TabBarIOS>
    )
  }
}

TabbedView.defaultProps = {
  tabs: tabs,
}
