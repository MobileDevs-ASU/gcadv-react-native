import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ListView,
  Dimensions
} from 'react-native';
import _ from 'lodash';
import { Components } from 'expo';
 import { connect } from'react-redux'
 import { Actions } from 'react-native-router-flux';
import {
  Card,
  CardHeader,
  CardImage,
  Footer,
  Header,
  Spinner,
  EventCard
 } from './common';
 import { imageLoading, getEvents, goToEvent } from '../actions'

const LISTVIEW_HEIGHT = Dimensions.get('window').height - 165
import GCADVLogo from '../images/GCADV_logo.png';
import EventImg from './../../assets/images/Event.jpg'

class Home extends Component {
  componentWillMount() {
    this.props.getEvents();
    this.createDataSource(this.props)
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(events);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onPress = (event) => {
    this.props.goToEvent(event);
    Actions.event({ type: 'replace' });
  }

  renderRows = (event) => {
    return (
      <EventCard
        event={event}
        onPress={this.onPress.bind(this, event)}
      />
    )
  }

  showImage(bool) {
    this.props.imageLoading(bool);
  }

  render() {
    const {
      title,
      description,
      image
    } = this.props.events[0];
    const { headerImageStyle, AnimatedContianer } = styles
    return (
      <View style={{flex: 1, zIndex: -1}}>
        <Header onPress={this.props.onPress}>
          <Image source={ GCADVLogo } style={ headerImageStyle } />
        </Header>
        <View style={{height: LISTVIEW_HEIGHT}}>
          <ListView
            enableEmptySections
            dataSource={ this.dataSource }
            renderRow={ this.renderRows }
          />
        </View>
        <Footer />
      </View>
    );
  }
}


const styles = {
  headerImageStyle: {
    height: 52.5,
    width: 52.5
  },
  loadingStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTextStyle: {
    fontSize: 20,
    color: '#f8f8f8',
    padding: 15
  },
  listViewStyle: {
    height: 400
  }
}

const mapStateToProps = state => {
  const events = _.map(state.events.events, (val, uid) => {
    return { ...val, uid };
  });
  return {
    events,
    image: state.image
  }
}


export default connect(mapStateToProps, {imageLoading, getEvents, goToEvent})(Home);
