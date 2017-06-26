import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Seperator
} from './../common'

const AboutSupport = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>How We Support Our Mission</Text>
      <Seperator />
      <Text style={styles.textStyle}>Fostering quality Services for victims</Text>
      <Text style={styles.textStyle}>Mobilizing a statewide voice to increate public policy</Text>
      <Text style={styles.textStyle}>Educating the public to take action</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
    color: '#9B9B9B'
  },
  titleStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 15,
    color: '#9B9B9B'
  }
}

export default AboutSupport
