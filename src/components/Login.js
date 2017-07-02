import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  AsyncStorage
} from 'react-native';
import {
  Input,
  Button,
  Spinner
} from './common';
import { Actions } from 'react-native-router-flux'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import Icon from './../images.GCADV_logo.png';
import {
  emailChanedText,
  passwordChangedText,
  loginUser,
  facebookLogin,
  attemptLogin,
  getEvents
} from '../actions';

class Login extends Component {

  buttonPressed = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getAllKeys();
      if (value !== null) {
        console.log(value)
      }
    }catch(error) {
      console.log(error);
    }
  }

  facebookBtnPressed = () => {
    this.props.facebookLogin();
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />
    }else{
      return (
        <Button
          title="Login / Sign Up"
          style={styles.buttonWidth}
          onPress={this.buttonPressed.bind(this)}
        />
      );
    }
  }

  render() {
    const {
      container,
      headerText,
      buttonWidth,
      headerStyle,
      iconStyle
    } = styles
    this.props.getEvents();
    return (
      <View style={{flex: 1}}>
        <View style={container}>
          <Text style={headerText}>Login</Text>
          <Image source={Icon} style={iconStyle}/>
          <Input
            title="Email"
            placeholder="joesmith@gmail.com"
            onChangeText={(text) => this.props.emailChanedText(text)}
            value={this.props.email}
            keyboardType='email-address'
          />
          <Input
            title="password"
            placeholder="password123"
            onChangeText={(text) => this.props.passwordChangedText(text)}
            value={this.props.password}
            keyboardType='default'
            secureTextEntry
          />
          { this.renderButton() }
          <Button
            title="Login with Facebook"
            style={buttonWidth}
            onPress={this.facebookBtnPressed.bind(this)}
          />
        </View>
        <Text>{this.props.error}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
  },
  buttonWidth: {
    width: Dimensions.get('window').width * 0.8
  },
  headerStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  iconStyle: {
    height: 60,
    width: 60,
    margin: 20
  }
};

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
    loading: state.login.loading
  }
}


export default connect(mapStateToProps, {
  emailChanedText,
  passwordChangedText,
  loginUser,
  facebookLogin,
  getEvents
})(Login)
