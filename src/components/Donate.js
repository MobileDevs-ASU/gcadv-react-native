import React from 'react';
import {
  View,
  Text,
  WebView
} from 'react-native';
import { Header } from './common';

const Donate = (props) => {

  const {
    headerTextStyle
  } = styles

  return (
    <View style={{flex: 1}}>
      <Header onPress={props.onPress}>
        <Text style={ headerTextStyle }>Donate</Text>
      </Header>
      <WebView
        source={{uri: 'https://www.paypal.com/donate/?token=_aRndoYkuBAj51TxilHArBkKmVrZMok_jUYDMszXZ7ZLNqO9L7UoOmxNQSV6gmp_D-JarW'}}
        style={{flex: 1}}
      />
    </View>
  )
}

const styles = {
  headerTextStyle: {
    fontSize: 20,
    color: '#949492',
  },
}

export default Donate;
