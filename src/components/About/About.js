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
    this.scrollY = new Animated.Value(0)
  }

  getFirstFontSize() {
    const fontSize = this.scrollY.interpolate({
      inputRange: [-100, -50, 0, 12000],
      outputRange: [72, 56, 48, 36]
    });

    const opacity = this.scrollY.interpolate({
      inputRange: [-100, -50, 0, 100, 200],
      outputRange: [1, .95, .9, .4, .1]
    });

    return {
      fontSize,
      opacity
    }
  }

  getSecondFontSize() {
    const fontSize = this.scrollY.interpolate({
      inputRange: [-100, -50, 0, 12000],
      outputRange: [36, 28, 24, 18]
    });

    const opacity = this.scrollY.interpolate({
      inputRange: [-100, -50, 0, 100, 200],
      outputRange: [1, .95, .9, .4, .1]
    });

    return {
      fontSize,
      opacity
    }
  }

  hideBar() {
    console.log(this.scrollY);
    // if(this.scrollY > 100) {
    //   console.log('test')
    //   this.props.hideStatusBar(true);
    // }else{
    //   this.props.hideStatusBar(false);
    // }
  }

  render() {

    return (
      <View style={StyleSheet.absoluteFill}>
        <StatusBar
           barStyle="light-content"
           hidden={this.props.hidden}
         />
        <LinearGradient
          colors={['#fff', '#f8f8f8']}
          style={{position: 'absolute', width: SCREEN_WIDTH, height: SCREEN_HEIGHT, zIndex: 1, opacity: .125}}
        />
        <CardImage
          source={{uri: HeaderImg}}
          style={{position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}
        >
          <AboutHeader
            style={styles.headerText}
            secondFontSize={this.getSecondFontSize()}
            firstFontSize={this.getFirstFontSize()}
          />
        </CardImage>
        <ScrollView
          bounces={true}
          alwaysBounceVertical={false}
          style={styles.scrollViewStyle}
          onScroll={Animated.event([{
              nativeEvent: {
                contentOffset: {y: this.scrollY}
              }
            }])}
          scrollEventThrottle={20}
        >
        <View style={{height: 160, backgroundColor: 'transparent'}}>
        </View>
        <LinearGradient
          colors={['#4A4A4A', '#000']}
          style={styles.bodyStyle}
        >
          <Text style={styles.groupHeaderStyle}>Our Mission</Text>
          <Seperator />
          <Mission />
          <AboutSupport />
        </LinearGradient>
        </ScrollView>
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
    padding: 20
  },
  descriptionText: {
    fontSize: 48,
    textAlign: 'center',
    margin: 20
  },
  headerText: {
    backgroundColor: 'transparent',
    paddingTop: 30,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000',
    shadowOpacity: .8
  },
  scrollViewStyle: {
    flex: 1,
    zIndex: 2,
  }
}

const mapStateToProps = state => {
  const { hidden } = state.statusBar
  return { hidden }
}



export default connect(mapStateToProps, {hideStatusBar})(About);
