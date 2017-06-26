import React from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';

const Letter = (props) => {

  splitWord = () => {
    const wordLength = props.name.length;

    var firstLetter = props.name.slice(0,1);
    var ending = props.name.slice(1, wordLength);

    const {
      container,
      firstLetterStyle,
      endingStyle
    } = styles

    return (
      <View style={container}>
        <View>
          <Animated.Text style={[firstLetterStyle, props.firstFontSize]}>{firstLetter}</Animated.Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingBottom: 7.5}}>
          <Animated.Text style={[endingStyle, props.secondFontSize]}>{ending}</Animated.Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      {this.splitWord()}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
  },
  firstLetterStyle: {
    fontSize: 48,
    color: '#fff',
    opacity: 0.9,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.7
  },
  endingStyle: {
    fontSize: 24,
    color: '#fff',
    opacity: 0.9,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.7
  }
}

export { Letter };
