import React from 'react'
import {StyleSheet, View, ListView, Text} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c8c7cc',
  },
})

export class List extends React.Component {
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

  renderRow(rowData) {
    return (
      <View key={rowData}><Text>{rowData}</Text></View>
    )
  }

  render() {
    if (!this.state.dataSource.getRowCount()) {
      return (
        <View style={styles.container}>
          <Text>Loading…</Text>
        </View>
      )
    }

    return (
      <ListView
        style={styles.container}
        initialListSize={48}
        pageSize={12}
        automaticallyAdjustContentInsets={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={(sectionId, rowId) =>
          <View key={`${sectionId},${rowId}`} style={styles.separator} />}
      />
    )
  }
}
