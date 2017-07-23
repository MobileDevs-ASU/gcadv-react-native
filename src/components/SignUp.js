import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Input,
  Button,
  Spinner,
  RegisterHeader
} from './common';

class SignUp extends Component {

  onBackPressed = () => {
    Actions.pop();
  }

  onLoginDidTapped = () => {
    Actions.login({ type: "replace" })
  }

  render() {
    const {
      innerContainer,
      backContainer,
      backButtonText,
      leftControlContainer,
      centerControlContainer,
      signUpText
    } = styles
    return (
      <View style={{flex: 1}}>
        <RegisterHeader
          title="Sign Up"
          rightText="Login"
          onPress={ this.onLoginDidTapped.bind(this) }
        />
        <View style={innerContainer}>
          <Input
            title="Email"
            placeholder="joesmith@gmail.com"
            keyboardType='email-address'
          />
          <Input
            title="Password"
            placeholder="password123"
            keyboardType='default'
            secureTextEntry
          />
          <Input
            title="Confirm Password"
            placeholder="password123 again"
            keyboardType='default'
            secureTextEntry
          />
          <Button
            title="Sign Up"
            style={styles.buttonWidth}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWidth: {
    width: Dimensions.get('window').width * 0.8
  }
}

export default connect()(SignUp);
