import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient, Components } from 'expo';
 import { connect } from'react-redux'
 import { Actions } from 'react-native-router-flux';
import {
  Card,
  CardHeader,
  CardImage,
  Footer,
  Header,
  Spinner
 } from './common';
 import { imageLoading } from '../actions'


import GCADVLogo from '../images/GCADV_logo.png';
import EventImg from './../../assets/images/Event.jpg'


class Home extends Component {

  showImage(bool) {
    this.props.imageLoading(bool);
  }

  render() {
    const { description, title } = this.props.events[0];
    console.log(description)
    const { headerImageStyle, AnimatedContianer } = styles
    return (
      <View style={{flex: 1, zIndex: -1}}>
        <Header onPress={this.props.onPress}>
          <Image source={ GCADVLogo } style={ headerImageStyle } />
        </Header>
        <Card style={{ flex: 1 }}>
          <CardHeader
            eventTitle={title}
            eventDescription={description}
            onPress={this.props.onEventPress}
          />
          <CardImage
            source={EventImg}
          >
          </CardImage>
        </Card>
        <Footer />
      </View>
    );
  }
}


const styles = {
  headerImageStyle: {
    height: 52.5,
    width: 52.5
  },
  loadingStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTextStyle: {
    fontSize: 20,
    color: '#f8f8f8',
    padding: 15
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    image: state.image
  }
}


export default connect(mapStateToProps, {imageLoading})(Home);
