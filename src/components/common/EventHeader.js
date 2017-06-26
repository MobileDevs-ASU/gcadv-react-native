import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { LinearGradient, BlurView } from 'expo';

import EventImg from './../../../assets/images/Event.jpg'

const EventHeader = (props) => {
  const {
    imageStyle,
    gradientStyle,
    textContainer,
    titleStyle,
    descriptionStyle,
    timeStyle,
    blurViewStyle,
    container
  } = styles
  return (
    <View style={container}>
      <Image source={EventImg} style={imageStyle}>
        <BlurView
          tint="default"
          intensity={45}
          style={blurViewStyle}
        >
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(216, 216, 216, .8)']}
            style={gradientStyle}
          >
          <View style={textContainer}>
            <Text style={titleStyle}>Event Title</Text>
            <Text style={descriptionStyle}>2300 Windy Ridge Pkwy SE, Atlanta GA, 30339-0003</Text>
            <Text style={descriptionStyle}>Monday October 20th, 2017</Text>
            <Text style={timeStyle}>6:00PM - 10:30PM</Text>
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
  }
}

export { EventHeader }
