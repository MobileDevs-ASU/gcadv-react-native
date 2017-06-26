import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Header, EventHeader } from './common';
import GCADVLogo from '../images/GCADV_logo.png';

class Event extends Component {
  render() {
    const {
      imageStyle
    } = styles
    return (
      <View>
        <Header onPress={this.props.onPress}>
          <Image
            source={GCADVLogo}
            style={imageStyle}
          />
        </Header>
        <EventHeader>
        </EventHeader>
      </View>
    )
  }
}

const styles = {
  imageStyle: {
    height: 52.5,
    width: 52.5
  }
}

export default Event;
