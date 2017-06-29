import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const MessageBox = (props) => {
  const {
    container,
    input,
    text,
    button
  } = styles
  return (
    <View style={ container }>
      <TextInput
        style={ input }
        placeholder="enter message here"
        onChangeText={ props.onChangeText }
      />
      <TouchableOpacity
        style={button}
        onPress={props.onPress}
      >
        <Text style={ text }>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    height: 60,
    backgroundColor: '#a4a4a4',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 3,
    height: 40,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  button: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
}

export { MessageBox };
