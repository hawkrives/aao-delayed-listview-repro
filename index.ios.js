import React from 'react'
import {TabBarIOS, View, ScrollView, Text, AppRegistry} from 'react-native'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function Scroller({showLoadingScreen}) {
  if (showLoadingScreen) {
    return <View style={{marginTop:20}}><Text>Loading…</Text></View>
  }

  return (
    <ScrollView automaticallyAdjustContentInsets>
      {items.map((rowData, i) =>
        <View key={i} style={{height: 44, justifyContent: 'center'}}>
          <Text>{rowData}</Text>
        </View>)}
    </ScrollView>
  )
}

class Interstitial extends React.Component {
  state = {loading: true}
  stopLoading = () => this.setState({loading: false})

  componentWillMount() {
    setTimeout(this.stopLoading, 1000)
  }

  render() {
    return <Scroller showLoadingScreen={this.state.loading} />
  }
}

class TabbedView extends React.Component {
  state = {tab: 0}
  setTab = (i) => () => this.setState({tab: i})
  isActive = i => this.state.tab === i

  render() {
    return (
      <TabBarIOS translucent>
        <TabBarIOS.Item title='Instant (OK)' selected={this.isActive(0)} onPress={this.setTab(0)}>
          <Scroller />
        </TabBarIOS.Item>

        <TabBarIOS.Item title='Interstitial (BAD)' selected={this.isActive(1)} onPress={this.setTab(1)}>
          <Interstitial />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

AppRegistry.registerComponent('AllAboutOlaf', () => TabbedView)

// import {registerComponent} from 'react-native-playground'
// registerComponent(TabbedView)
