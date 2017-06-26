import React, { Component } from 'react';
import {
  Animated,
  View,
  PanResponder,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import { Components } from 'expo';
const { BlurView } = Components;
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Router from './RouterComponent';
import Drawer from './Drawer';
import { toggleDrawer, imageLoading, hideStatusBar } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

var offset = false;

class App extends Component {

  constructor(props) {
    super(props);
    this.point = 0;
    this.position = new Animated.ValueXY();
    console.log(this.position)
    const panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (event, gesture) => {
        if (Math.abs(gesture.dx) > 50) {
            return true;
        }
        return false;
      },
      onMoveShouldSetResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 3);
      },
      onStartShouldSetPanResponder: (event, gesture) => {
        Math.abs(gesture.dx) > Math.abs(gesture.dy * 3);
      },
      onPanResponderMove: (event, gesture) => {
        if(!offset) {
          if (gesture.dx > 0 && gesture.dx < 300) {
            this.position.setValue({x: gesture.dx, y: 0})
          }
        }else{
          if (gesture.dx < 0 && gesture.dx > -300) {
            this.position.setValue({x: gesture.dx, y: 0})
          }
        }
      },
      onPanResponderGrant: (event, gesture) => {
        this.position.setOffset({ x: this.position.x._value, y: this.position.y._value});
        this.position.setValue({ x: 0, y: 0 })
      },
      onPanResponderRelease: (event, gesture) => {
        this.position.flattenOffset();
        if (!offset) {
          if (gesture.dx > SWIPE_THRESHOLD ) {
            this.togglePressed();
          }else{
            this.springBack(0);
          }
        }else{
          if (gesture.dx < -SWIPE_THRESHOLD ) {
            this.togglePressed();
          }else{
            this.springBack(300);
          }
        }
      },
    });

    this.state = { panResponder };
  }

  springBack(x) {
    const {
      open
    } = this.props;
    this.position.flattenOffset();
    toggleDrawer(!open)
    Animated.spring(this.position,
    {
      toValue: {x, y: 0},
      tension: 10
    }).start();
  }
  onEventPress() {
    Actions.event({type: 'replace'});
    this.props.imageLoading(false);
  }

  onHomePress() {
    Actions.home({type: 'replace'});
    this.props.imageLoading(false);
    this.togglePressed()
  }

  onAboutPress() {
    Actions.about({type: 'replace'});
    this.props.imageLoading(false);
    this.togglePressed()
  }

  onDonatePress() {
    Actions.donate({type: 'replace'});
    this.props.imageLoading(false);
    this.togglePressed()
  }

  hideBar() {
    this.props.hideStatusBar(!this.props.hidden);
    console.log(this.props.hidden);
  }

  togglePressed() {
    const {
      toggleDrawer,
      open,
      toValue
    } = this.props;
    offset = open
    toggleDrawer(!open)
    Animated.spring(this.position,
    {
      toValue: {x: toValue, y: 0},
      tension: 10
    }).start();
    this.hideBar();
  }

  getOpacity() {
    const shadowOpacity = this.position.x.interpolate({
      inputRange: [ 0, 150, 300 ],
      outputRange: [0, .5, 1]
    });
    const opacity = this.position.x.interpolate({
      inputRange: [ 0, 150 ],
      outputRange: [0, .15]
    });
    const zIndex = this.position.x.interpolate({
      inputRange: [ 0, 150 ],
      outputRange: [0, 999 ]
    })
    return {
      zIndex,
      opacity,
      backgroundColor: '#987197',
      shadowOpacity,
      shadowColor: 'black',
      shadowOffset: { width: 5, height: 1 },
      elevation: 10
    }
  }

  render() {
    const { shadowStyle } = this.props
    return (
      <View style={{flex: 1}}>
        <StatusBar
          hidden={this.props.hidden}
          showHideTransition='fade'
          animated={true}
        />
        <Drawer
          onPress={this.togglePressed.bind(this)}
          onAboutPress={this.onAboutPress.bind(this)}
          onHomePress={this.onHomePress.bind(this)}
          onDonatePress={this.onDonatePress.bind(this)}
        />
        <Animated.View
          style={{...this.position.getLayout(), ...{flex: 1}}}
          {...this.state.panResponder.panHandlers}
        >
          <Animated.View
            style={{...this.getOpacity(), ...{position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}}
          >
          <TouchableWithoutFeedback onPress={this.togglePressed.bind(this)}>
            <View
            style={styles.overlayBtn}>
            </View>
          </TouchableWithoutFeedback>
          </Animated.View>
          <Router
            onPress={this.togglePressed.bind(this)}
            onEventPress={this.onEventPress.bind(this)}
          />
      </Animated.View>
      </View>
    )
  }
}

mapStateToProps = state => {
  const { open } = state.drawer;
  const { hidden } = state.statusBar;
  const toValue = open ? 300 : 0;
  return {
    open,
    toValue,
    hidden
  }
}

const styles = {
  overlayBtn: {
    position: 'absolute',
    width: 62.5,
    height: 60,
    top: 10,
    left: 7.5,
  }
}


export default connect(mapStateToProps, { toggleDrawer, imageLoading, hideStatusBar })(App);
