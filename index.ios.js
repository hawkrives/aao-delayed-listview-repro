import React from 'react'
import {TabBarIOS, View, ScrollView, Text, AppRegistry} from 'react-native'

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

function Scroller({showLoadingScreen, data}) {
  if (showLoadingScreen && !data.length) {
    return <View><Text>Loading…</Text></View>
  }

  return (
    <ScrollView automaticallyAdjustContentInsets={true}>
      {data.map((rowData, i) =>
        <View key={i} style={{height: 44, justifyContent: 'center'}}>
          <Text>{rowData}</Text>
        </View>)}
    </ScrollView>
  )
}

class Instant extends React.Component {
  state = {foodItems: items}

  render() {
    return <Scroller data={this.state.foodItems} />
  }
}

class Delayed extends React.Component {
  state = {foodItems: []}

  componentWillMount() {
    setTimeout(() => this.setState({foodItems: items}), 16)
  }

  render() {
    return <Scroller showLoadingScreen={this.props.showLoadingScreen} data={this.state.foodItems} />
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
