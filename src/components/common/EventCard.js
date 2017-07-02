import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

import {
  Card,
  CardHeader,
  CardImage
} from './index';


const HEIGHT = Dimensions.get('window').height - 165
const EventCard = (props) => {
  onPress = () => {
    console.log(this.props.event);
  }
  const {
    title,
    description,
    image
  } = props.event
  return (
    <View style={ styles.container }>
      <Card style={{ flex: 1 }}>
        <CardHeader
          eventTitle={title}
          eventDescription={description}
          onPress={props.onPress}
        />
        <CardImage
          source={{uri: image}}
        />
      </Card>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: HEIGHT
  }
}

export { EventCard };
