import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  DescriptiveImage
} from './../common'

const MissionSection = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <DescriptiveImage />
        <DescriptiveImage />
      </View>
    </View>
  );
};

const styles = {
  imageContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    height: 150,
    paddingRight: 25,
    paddingLeft: 25
  }
}

export default MissionSection;
