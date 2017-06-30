import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Card,
  CardSection
} from './index';

const Message = (props) => {
  console.log("USER: " + props.user.uid)
  console.log("MESSAGE: " + props.message.user)
  if(props.user.uid == props.message.user){
    return (
      <Text>Users message</Text>
    )
  }
  return (
      <CardSection>
        <Text>{props.message.message}</Text>
      </CardSection>
  );
};

export { Message };
