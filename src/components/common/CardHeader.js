import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const CardHeader = (props) => {

  const {
    cardHeaderStyle,
    eventTitleStyle,
    eventDescriptionStyle,
    container,
    eventButtonContainer,
    eventButtonText,
    eventButton
   } = styles

  return (
    <View style={container}>
      <View style={ cardHeaderStyle }>
        <Text style={ eventTitleStyle }>{ props.eventTitle }</Text>
        <Text style={ eventDescriptionStyle }>{ props.eventDescription }</Text>
      </View>
      <View style={eventButtonContainer}>
        <TouchableOpacity style={eventButton} onPress={props.onPress}>
          <Text style={eventButtonText}>View Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    height: 80,
    flexDirection: 'row'
  },
  eventButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 15,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
  },
  eventButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 7.5
  },
  cardHeaderStyle: {
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    flex: 1
  },
  eventTitleStyle: {
    fontSize: 24,
    color: '#fff',
  },
  eventDescriptionStyle: {
    color: '#fff',
    fontSize: 16,
  },
  eventButtonText: {
    color: '#fff',
    fontSize: 15,
  }
}

export { CardHeader }
