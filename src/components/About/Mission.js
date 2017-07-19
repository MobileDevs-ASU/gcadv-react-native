import React from'react';
import {
  View
} from 'react-native';
import MissionSection from './MissionSection'

const Mission = (props) => {
  return (
    <View style={styles.container}>
      <MissionSection onPress={props.onButtonPressed}/>
      <MissionSection onPress={props.onButtonPressed}/>
    </View>
  );
};

const styles = {
  container: {
    paddingTop: 25
  }
}

export default Mission
