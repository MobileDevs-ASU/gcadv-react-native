import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { LinearGradient, BlurView } from 'expo';
import { Actions } from 'react-native-router-flux';
import messageIcon from './../../images/message_icon.png'

import EventImg from './../../../assets/images/Event.jpg'

const EventHeader = (props) => {

  onPress = () => {
    Actions.chat()
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
  return (
    <View style={container}>
      <Image source={{ uri: image }} style={imageStyle}>
        <BlurView
          tint="default"
          intensity={45}
          style={blurViewStyle}
        >
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(216, 216, 216, .8)']}
            style={gradientStyle}
          >
          <TouchableOpacity onPress={this.onPress.bind(this)} style={ messageIconStyle }>
            <Image source={ messageIcon } style={{ height: 35, width: 35}} />
          </TouchableOpacity>
          <View style={textContainer}>
            <Text style={titleStyle}>{ title }</Text>
            <Text style={descriptionStyle}>{ address }</Text>
            <Text style={descriptionStyle}>Monday October 20th, 2017</Text>
            <Text style={timeStyle}>{ time }</Text>
          </View>
          </LinearGradient>
        </BlurView>
      </Image>
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
    color: 'white'
  },
  descriptionStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    marginTop: 10
  },
  timeStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
  },
  blurViewStyle: {
    flex: 1,
    flexGrow: 1
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
