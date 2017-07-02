import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Header, EventHeader, Performer } from './common';
import GCADVLogo from '../images/GCADV_logo.png';

class Event extends Component {
  componentWillMount() {
    this.getPerformers();
  }
  getPerformers = () => {
    const performers = _.map(this.props.event.performers, (val, uid) => {
      return { ...val, uid };
    });
    this.createDataSource(performers)
  }
  createDataSource = (performers) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(performers);
  }

  renderRow = (performer) => {
    return <Performer performer={ performer } />
  }

  render() {
    const {
      imageStyle,
      container,
      listView
    } = styles
    return (
      <View style={ container }>
        <Header onPress={this.props.onPress}>
          <Image
            source={GCADVLogo}
            style={imageStyle}
          />
        </Header>
        {this.getPerformers()}
        <EventHeader event={this.props.event}/>
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
          style={ listView }
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  imageStyle: {
    height: 52.5,
    width: 52.5
  },
  listView: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f8f8f8'
  }
}
const mapStateToProps = state => {
  return {
    event: state.events.event
  }
}

export default connect(mapStateToProps)(Event);
