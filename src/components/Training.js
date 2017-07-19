import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';
import _ from 'lodash'
import { Video } from 'expo';
import { connect } from 'react-redux';
import { getTrainings } from '../actions';
import {
  Header,
  Card,
  TrainingCard
} from './common'

class Training extends Component {

  componentWillMount() {
    this.props.getTrainings();
    this.createDataSource(this.props);
  }

  createDataSource({ trainings }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(trainings);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  renderRows = (training) => {
    return <TrainingCard training={training}/>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 1, flexGrow: 1}}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRows}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const trainings = _.map(state.training.trainings, (val, uid) => {
    return { ...val, uid };
  });
  console.log("Trainings", trainings)
  return {
    trainings
  }
}

export default connect(mapStateToProps, { getTrainings })(Training);
