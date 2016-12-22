import React from 'react'
import {AppRegistry, Navigator, StyleSheet, Text} from 'react-native'
import TabbedView from './views'

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    backgroundColor: 'rgb(240, 239, 245)',
  },
  navigationBar: {
    backgroundColor: '#0074D9',
    shadowOffset: { width: 0, height: StyleSheet.hairlineWidth },
    shadowColor: 'rgb(100, 100, 100)',
    shadowOpacity: 0.5,
    shadowRadius: StyleSheet.hairlineWidth,
  },
  titleText: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 12,
  },
})

class App extends React.Component {
  _navigator: typeof Navigator;

  render() {
    return (
      <Navigator
        ref={nav => this._navigator = nav}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={{
              Title: (route) => <Text style={styles.titleText}>Menus</Text>,
              LeftButton() {},
              RightButton() {},
            }}
          />
        }
        renderScene={() => <TabbedView />}
        sceneStyle={styles.container}
      />
    )
  }
}

AppRegistry.registerComponent('AllAboutOlaf', () => App)
