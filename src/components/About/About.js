import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import {
  CardImage,
  Card,
  StackContainer,
  Header,
  Letter,
  Seperator,
  Modal
} from './../common'
import Expo, { Components, Assets } from 'expo';
const { LinearGradient } = Components
import { hideStatusBar } from '../../actions'
import AboutHeader from './AboutHeader';
import Mission from './Mission';
import AboutSupport from './AboutSupport'

const HeaderImg = Expo.Asset.fromModule(require('./../../images/About-Header.jpg')).uri;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class About extends Component {

  constructor(props) {
    super(props);
    this.position = new Animated.Value(-SCREEN_HEIGHT);
    this.opacity = new Animated.Value(0);
  }

  onButtonPressed = () => {
    Animated.sequence([
      Animated.timing(this.position, {
        toValue: 0,
        duration: 750
      }),
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 400
      })
    ]).start();
  }

  exitPressed = () => {
    Animated.sequence([
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 400
      }),
      Animated.timing(this.position, {
        toValue: -SCREEN_HEIGHT,
        duration: 750
      })
    ]).start();
  }

  render() {
    console.log("Position: ", this.position)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
           barStyle="light-content"
           hidden={this.props.hidden}
         />
        <AboutHeader
          style={styles.headerText}
        />
        <ScrollView
          bounces={true}
          alwaysBounceVertical={false}
          style={styles.scrollViewStyle}
          scrollEventThrottle={20}
        >
        <View style={styles.bodyStyle}>
          <View style={styles.missionStyle}>
            <Text style={styles.groupHeaderStyle}>Our Mission</Text>
            <Seperator />
            <Mission
              onButtonPressed={this.onButtonPressed.bind(this)}
            />
          </View>
          <AboutSupport />
        </View>
        </ScrollView>
        <Modal
          style={{top: this.position}}
          opacity={{opacity: this.opacity}}
          exitPressed={this.exitPressed.bind(this)}
        />
      </View>
    )
  }
}

const styles = {

  bodyStyle: {
    backgroundColor: 'transparent',
    opacity: 0.95,
    paddingBottom: 50
  },
  groupHeaderStyle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#9B9B9B',
    padding: 20,
    fontFamily: 'Avenir Next'
  },
  descriptionText: {
    fontSize: 48,
    textAlign: 'center',
    margin: 20
  },
  headerText: {
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000',
    shadowOpacity: .8
  },
  scrollViewStyle: {
    flex: 1,
    zIndex: 2,
  },
  missionStyle: {
    backgroundColor: '#f8f8f8',
    paddingBottom: 20
  }
}

const mapStateToProps = state => {
  const { hidden } = state.statusBar
  return { hidden }
}



export default connect(mapStateToProps, {hideStatusBar})(About);
