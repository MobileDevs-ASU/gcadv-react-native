import React from 'react'
import {
  View,
  Dimensions
} from 'react-native'
import { Components } from 'expo';
const { LinearGradient } = Components;

const CARD_HEIGHT = Dimensions.get('window').height * .75;

const Card = (props) => {
  return (
    <View style={[ props.style, styles.cardStyle]}>
      { props.children }
    </View>
  );
}

const styles = {
  cardStyle: {
    backgroundColor: 'white'
  }
}

export { Card };
