import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const Performer = (props) => {
  const {
    container,
    topContainer,
    bottomContaienr,
    innerContainer,
    imageContainer,
    imageStyle,
    info,
    performerText,
    performerTime,
    performerDescription,
    performerDescriptionText
  } = styles
  const {
    description,
    name,
    time,
    image
  } = props.performer
  return (
    <View style={ container }>
      <View style={ topContainer }>
        <View style={ innerContainer }>
          <View style={ imageContainer }>
            <Image style={ imageStyle } source={{uri: image }}/>
          </View>
          <View style={ info }>
            <Text style={ performerText }>{ name }</Text>
            <Text style={ performerTime }>Time: { time }</Text>
          </View>
        </View>
      </View>
      <View style={ bottomContaienr }>
        <Text style={ performerDescription }>Performer Description</Text>
        <Text style={ performerDescriptionText }>  { description }</Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    height: 235,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    margin: 20,
    borderRadius: 10
  },
  topContainer: {
    flex: 3,
  },
  bottomContaienr: {
    flex: 2,
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 1
  },
  imageContainer: {
    flex: 3,
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  imageStyle: {
    flex: 1,
    flexGrow: 1,
  },
  info: {
    flex: 2,
    backgroundColor: '#9B9B9B',
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  performerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15
  },
  performerTime: {
    color: 'white',
    fontSize: 10,
    marginBottom: 15,
    textAlign: 'center'
  },
  performerDescription: {
    color: '#9B9B9B',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10
  },
  performerDescriptionText: {
    color: '#9B9B9B',
    margin: 5
  }
}

export { Performer }
