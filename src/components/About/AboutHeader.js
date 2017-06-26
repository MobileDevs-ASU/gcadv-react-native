import React from 'react';
import {
  View,
  Animated
} from 'react-native';
import { Letter } from './../common'

const AboutHeader = (props) => {
  return (
    <Animated.View style={props.style}>
    <View style={{alignItems: 'center'}}>
      <View style={{ flexDirection: 'row'}}>
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Georgia"
        />
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Coalition"
        />
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Against"
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Domestic"
        />
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Violence"
        />
      </View>
    </View>
    </Animated.View>
  );
}

export default AboutHeader;
