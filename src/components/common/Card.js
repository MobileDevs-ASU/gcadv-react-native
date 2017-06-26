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
    <LinearGradient
     colors={['#987197', '#5b5ba1']}
     style={{ ...styles.cardStyle, ...props.style }}
     >
      { props.children }
    </LinearGradient>
  );
}

const styles = {
  cardStyle: {
    height: CARD_HEIGHT,
    backgroundColor: 'transparent'
  }
}

export { Card };
