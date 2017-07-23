import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Email from './../images/email_icon.png';

class LoginSignUp extends Component {

  signInDidTapped = () => {
    Actions.login();
  }

  signUpDidTapped = () => {
    Actions.signUp();
  }

  render() {
    const {
      container,
      innerContainer,
      imageStyle,
      imageContainer,
      titleText,
      moveOnText,
      buttonContainer
    } = styles;
    return (
      <View style={container}>
        <View style={innerContainer}>
          <View style={imageContainer}>
            <Image source={Email} style={imageStyle} />
          </View>
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity onPress={ this.signInDidTapped.bind(this) }>
            <Text style={titleText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.signUpDidTapped.bind(this) }>
            <Text style={titleText}>Create An Account</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={moveOnText}>Scroll back to Sign in with Facebook</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#BC2132',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 100,
    width: 100
  },
  innerContainer: {
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  imageContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    alignSelf: 'center'
  },
  moveOnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    height: 80,
    justifyContent: 'space-around'
  }
}

export default LoginSignUp
