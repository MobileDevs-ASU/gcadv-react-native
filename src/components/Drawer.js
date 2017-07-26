import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { NavigationButton, Icon } from './common';
import { Components } from 'expo';
const { LinearGradient } = Components;

import backBtn from '../images/BackButton.png'
import facebook from '../images/fb-icon.png'
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

const DRAWER_HEIGHT = Dimensions.get('window').height
const DRAWER_WIDTH = 300;
class Drawer extends Component {

  render() {
    const {
      drawerStyle,
      drawerHeaderStyle,
      drawerHeaderTextContainerStyle,
      drawerHeaderTextStyle,
      drawerLeftContent,
      navigationStyle,
      drawerFooter,
      drawerFooterTextStyle,
      socialIconContainer,
      backbtnStyle,
      iconStyle,
      drawerRightContent,
      drawerRightText
    } = styles
    return (
      <LinearGradient
       colors={['#4A4A4A', '#404040', '#303030']}
       style={ styles.drawerStyle }>
        <View style={ drawerHeaderStyle }>
          <View style={ drawerLeftContent }>
            <Icon
              source={backBtn}
              onPress={this.props.onPress}
              style={backbtnStyle}
            />
          </View>

          <View style={ drawerHeaderTextContainerStyle }>
            <Text style={ drawerHeaderTextStyle }>
              GCADV
            </Text>
          </View>

          <View style={drawerRightContent}>
            <TouchableOpacity onPress={ this.props.onRightPressed }>
              <Text style={drawerRightText}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={navigationStyle}>
          <NavigationButton
            title="Home"
            onPress={this.props.onHomePress}
          />

          <NavigationButton
            title="Training"
            onPress={this.props.onTrainingPress}
          />

          <NavigationButton
            title="About Us"
            onPress={this.props.onAboutPress}
          />

          <NavigationButton
            title="Donate"
            onPress={this.props.onDonatePress}
          />
        </View>

        <View style={drawerFooter}>
          <Text style={drawerFooterTextStyle}>
            Connect on Social Media
          </Text>

          <View style={ socialIconContainer }>
            <Icon style={iconStyle} source={facebook}/>
            <Icon style={iconStyle} source={linkedin}/>
            <Icon style={iconStyle} source={instagram}/>
            <Icon style={iconStyle} source={twitter} />
          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = {
  drawerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: DRAWER_HEIGHT,
    width: DRAWER_WIDTH,
    backgroundColor: 'transparent',
  },
  iconStyle: {
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  drawerHeaderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    height: 75,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 12.5
  },
  drawerHeaderTextContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  drawerHeaderTextStyle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#A3A3A3',
    shadowOpacity: .8,
    fontFamily: 'Avenir Next',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  drawerLeftContent: {
    justifyContent: 'center',
    flex: 1
  },
  drawerRightContent: {
    justifyContent: 'center',
    flex: 1
  },
  drawerRightText: {
    textAlign: 'right',
    color: 'white'
  },
  navigationStyle: {
    paddingLeft: 20,
    paddingRight: 20
  },
  drawerFooter: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: DRAWER_WIDTH,
    zIndex: 2
  },
  drawerFooterTextStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    color: '#A3A3A3'
  },
  socialIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  backbtnStyle: {
    height: 35,
    width: 35,
    borderRadius: 35/2,
    justifyContent: 'center',
    shadowOpacity: .2,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  }
}


export default Drawer;
