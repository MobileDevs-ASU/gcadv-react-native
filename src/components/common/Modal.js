import React from 'react';
import {
  View,
  Animated,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Modal = (props) => {
  return (
    <Animated.View style={[ styles.animatedContianer, props.style ]}>
      <Animated.View style={[styles.container, props.opacity]}>
        <View style={styles.modalHeader}>
          <View style={styles.modalHeaderLeft}>
            <TouchableOpacity onPress={props.exitPressed}>
              <Text style={styles.modalHeaderLeftText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalHeaderCenter}>
            <Text style={styles.modalHeaderCenterText}>Header</Text>
          </View>

          <View style={styles.modalHeaderRight}>
          </View>
        </View>
      </Animated.View>
      <View style={styles.overlay}></View>
    </Animated.View>
  )
};

const styles = {
  animatedContianer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 20
  },
  container: {
    height: 300,
    width: 250,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4A4A4A',
    zIndex: 999,
  },
  overlay: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#f8f8f8',
    zIndex: 998,
    opacity: 0.5
  },
  modalHeader: {
    height: 60,
    backgroundColor: '#4A4A4A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeaderLeft: {
    flex: 1
  },
  modalHeaderCenter: {
    flex: 2
  },
  modalHeaderRight: {
    flex: 1
  },
  modalHeaderLeftText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 14
  },
  modalHeaderCenterText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 18,
    textAlign: 'center'
  }
}

export { Modal };
