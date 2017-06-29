import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { chatChanged, messageSent, messageFetched } from './../actions';
import {
  MessageBox,
} from './common';

class Chat extends Component {
  componentWillMount() {
    this.props.messageFetched();
  }
  onPress = () => {
    this.props.messageSent(this.props.message, this.props.user);
  }
  render() {
    const {
      container,
      messageContainer
    } = styles
    return (
      <View style={ container }>
        <ScrollView style={ messageContainer }>

        </ScrollView>
        <MessageBox
          onChangeText={(text) => this.props.chatChanged(text)}
          value={ this.props.message }
          onPress={ this.onPress.bind(this) }
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  messageContainer: {
    flex: 1
  }
}

mapStateToProps = state => {
  const  { message, messages } = state.chat;
  console.log(messages)
  const { user } = state.login;
  return {
    message,
    messages,
    user,
  };
};

export default connect(mapStateToProps, { chatChanged, messageSent, messageFetched })(Chat);
