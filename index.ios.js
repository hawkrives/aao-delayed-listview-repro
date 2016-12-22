import React from 'react'
import {TabBarIOS, View, ListView, Text, AppRegistry} from 'react-native'

const items = [
  'Bacon',
  'BBQ Chicken',
  'Black Olives',
  'Bosco Sticks',
  'Bottled Beverages',
  'Buffalo Chicken',
  'Canadian Bacon',
  'Cheese Quesadilla',
  'Chicken Bacon Ranch',
  'Chicken Pesto',
  'Chicken Strips',
  'Chicken',
  'Chips & Salsa',
  'Fountain Drinks',
  'Garden Pita',
  'Garlic Cheesy Bread',
  'Green Peppers',
]

class List extends React.Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    }),
  }

  componentWillMount() {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.data)})
  }

  componentWillReceiveProps(newProps) {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(newProps.data)})
  }

  render() {
    if (this.props.showLoadingScreen && !this.state.dataSource.getRowCount()) {
      return <View><Text>Loading…</Text></View>
    }

    return (
      <ListView
        enableEmptySections
        automaticallyAdjustContentInsets={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View style={{height: 44, justifyContent: 'center', borderBottomWidth: 1}}>
            <Text>{rowData}</Text>
          </View>}
      />
    )
  }
}

class Instant extends React.Component {
  state = {
    foodItems: items,
  }

  render() {
    return (
      <List data={this.state.foodItems} />
    )
  }
}

class Delayed extends React.Component {
  state = {
    foodItems: [],
  }

  componentWillMount() {
    setTimeout(() => this.setState({foodItems: items}), 1000)
  }

  render() {
    return (
      <List showLoadingScreen={this.props.showLoadingScreen} data={this.state.foodItems} />
    )
  }
}

class TabbedView extends React.Component {
  state = {tab: 0}
  setTab = (i) => () => this.setState({tab: i})
  isTab = i => this.state.tab === i

  render() {
    return (
      <TabBarIOS style={{marginTop: 20}} translucent={true}>
        <TabBarIOS.Item title='Instant' selected={this.isTab(0)} onPress={this.setTab(0)}>
          <Instant />
        </TabBarIOS.Item>

        <TabBarIOS.Item title='Delayed (OK)' selected={this.isTab(1)} onPress={this.setTab(1)}>
          <Delayed showLoadingScreen={false} />
        </TabBarIOS.Item>

        <TabBarIOS.Item title='Delayed (BAD)' selected={this.isTab(2)} onPress={this.setTab(2)}>
          <Delayed showLoadingScreen={true} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

AppRegistry.registerComponent('AllAboutOlaf', () => TabbedView)

// import {registerComponent} from 'react-native-playground'
// registerComponent(TabbedView)
