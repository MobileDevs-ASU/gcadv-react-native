import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  StyleSheet
} from 'react-native';
import _ from 'lodash';
import { LinearGradient, BlurView } from 'expo';
import { Actions } from 'react-native-router-flux';
import messageIcon from './../../images/message_icon.png'

import EventImg from './../../../assets/images/Event.jpg'

const SCREEN_WIDTH = Dimensions.get('window').width
const EventHeader = (props) => {

  onPress = () => {
    Actions.chat()
  }

  getVenueImages = () => {
    const venueImages = _.map(props.event.venue.images, (val, uid) => {
      return { val, uid };
    });
    this.createDataSource(venueImages)
  }
  createDataSource = (venueImages) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(venueImages);
  }

  renderRow = (venueImage) => {
    const {
      blurViewStyle,
      gradientStyle
    } = styles
    return  (
      <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(216, 216, 216, .8)']}
          style={gradientStyle}
        >
          <Image style={{height: 177, flex: 1, }} source={{uri: venueImage.val}} />
      </LinearGradient>
    )
  }

  const {
    imageStyle,
    gradientStyle,
    textContainer,
    titleStyle,
    descriptionStyle,
    timeStyle,
    blurViewStyle,
    container,
    messageIconStyle
  } = styles;
  const {
    time,
    image,
    title,
    address
  } = props.event;
  this.getVenueImages();
  return (
    <View style={container}>
      <View style={{flex: 1}}>
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
          style={{flex: 1}}
          pagingEnabled={true}
        >
        </ListView>
      </View>
      <View style={{position: 'absolute', backgroundColor: 'transparent', height: 177, width: SCREEN_WIDTH * 0.8, backgroundColor: 'red'}}>
        <BlurView
          tint="default"
          intensity={60}
          style={blurViewStyle}
        >
          <Text>Test</Text>
        </BlurView>
      </View>
    </View>
  )
}

const styles = {
  container: {
    height: 177
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    flex: 1
  },
  gradientStyle: {
    flex: 1
  },
  textContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: 'Avenir Next',
    marginTop: 10,
    color: '#a8a8a8',
  },
  descriptionStyle: {
    fontSize: 18,
    color: '#a8a8a8',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    marginTop: 10
  },
  timeStyle: {
    fontSize: 18,
    color: '#a8a8a8',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
  },
  blurViewStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: SCREEN_WIDTH * 0.8
  },
  messageIconStyle: {
    width: 35,
    height: 35,
    position: 'absolute',
    bottom: 2.5,
    right: 7.5,
    zIndex: 999
  }
}

export { EventHeader }
