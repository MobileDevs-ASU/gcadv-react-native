import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

const NavigationButton = (props) => {
  const {
    navigationButtonContainer,
    navigationButtonTextStyle
  } = styles
  return (
    <View style={ navigationButtonContainer }>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={navigationButtonTextStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  navigationButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    paddingTop: 15,
    paddingBottom: 15
  },
  navigationButtonTextStyle: {
    fontSize: 22,
    color: '#A3A3A3',
    fontWeight: '300'
  }
}

export { NavigationButton }
