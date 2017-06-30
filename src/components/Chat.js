import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as firebase from 'firebase';
import { chatChanged, messageSent, messageFetched } from './../actions';
import {
  MessageBox,
  Message
} from './common';

class Chat extends Component {
  componentWillMount() {
    this.props.messageFetched();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ messages }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(messages);
  }

  onPress = () => {
    this.props.messageSent(this.props.message, this.props.user);
  }

  renderRow = (message) => {
    return <Message message={ message } user={ this.props.user } />;
  }

  render() {
    const {
      container,
      messageContainer
    } = styles
    return (
      <View style={ container }>
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
        />
        <MessageBox
          onChangeText={(text) => this.props.chatChanged(text)}
          value={ this.props.message }
          onPress={ this.onPress.bind(this) }
          loading={this.props.loading}
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
  const  {
    message,
    loading,
    error
  } = state.chat;
  const messages = _.map(state.chat.messages, (val, uid) => {
    return { ...val, uid }
  });
  const { user } = state.login;
  return {
    message,
    messages,
    user,
    loading
  };
};

export default connect(mapStateToProps, { chatChanged, messageSent, messageFetched })(Chat);
