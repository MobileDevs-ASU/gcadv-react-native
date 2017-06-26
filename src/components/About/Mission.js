import React from'react';
import {
  View
} from 'react-native';
import MissionSection from './MissionSection'

const Mission = (props) => {
  return (
    <View style={styles.container}>
      <MissionSection />
      <MissionSection />
    </View>
  );
};

const styles = {
  container: {
    paddingTop: 25
  }
}

export default Mission
