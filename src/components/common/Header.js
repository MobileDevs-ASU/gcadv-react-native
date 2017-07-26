import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions'
import menuSlider from '../../images/Menu Btn.png'
import phone from '../../images/Phone Btn.png'

Header = (props) => {

  const {
    headerStyle,
    headerFontStyle,
    headerContentLeft,
    headerContentMiddle,
    headerContentRight,
    rightIconStyle,
    rightTouchableOpacityStyle
  } = styles

  return (
    <View style={ headerStyle }>
      <StatusBar
        barStyle="default"
      />
      <View style={ headerContentLeft }>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={ menuSlider } />
        </TouchableOpacity>
      </View>

      <View style={ headerContentMiddle }>
        {props.children}
      </View>

      <View style={ headerContentRight }>
        <TouchableOpacity onPress={() => Communications.phonecall('6786203481', true)} style={ rightTouchableOpacityStyle } >
          <Text>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  headerStyle: {
    height: 75,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: 0.2,
    flexDirection: 'row',
    elevation: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#979797',
    paddingTop: 12.5,
  },
  headerContentLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12.5,
  },
  headerContentMiddle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2.5
  },
  headerContentRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 12.5
  },
  headerFontStyle: {
    fontSize: 24
  },
  rightIconStyle: {
    transform: [{scale: 0.9}]
  },

}

export { Header }
