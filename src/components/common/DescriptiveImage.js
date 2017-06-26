import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import houseImg from '../../images/house.png'

const DescriptiveImage = (props) => {
  const {
    imageStyle,
    container,
    textStyle
  } = styles
  return (
    <View style={container}>
      <Image
        source={houseImg}
        style={imageStyle}
      />
      <Text style={textStyle}>Advocate</Text>
    </View>

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
    fontFamily: 'Helvetica Neue',
    color: '#979797',
    paddingTop: 10,
    textAlign: 'center'
  }
}

export { DescriptiveImage };
