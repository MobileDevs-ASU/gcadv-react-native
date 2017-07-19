import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import houseImg from '../../images/house.png'

const DescriptiveImage = (props) => {
  const {
    imageStyle,
    container,
    textStyle
  } = styles
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={container}>
        <Image
          source={houseImg}
          style={imageStyle}
        />
        <Text style={textStyle}>Advocate</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    width: 100
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 50
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'Avenir Next Condensed',
    color: '#979797',
    paddingTop: 10,
    textAlign: 'center'
  }
}

export { DescriptiveImage };
