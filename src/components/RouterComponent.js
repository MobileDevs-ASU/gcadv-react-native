import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import About from './About/About';
import Home from './Home';
import Donate from './Donate'
import Event from './Event'
import Login from './Login'
import Chat from './Chat';
import Training from './Training';
import OnBoarding from './OnBoarding';
import SignUp from './SignUp';

const RouterComponent = (props) => {
  return (
    <Router>
      <Scene hideNavBar={true} key="onboarding" initial>
        <Scene
          key="onBoarding"
          component={ OnBoarding }
        />
        <Scene
          key="login"
          animation="fade"
          component={ Login }
        />
        <Scene
          key="signUp"
          animation="fade"
          component={ SignUp }
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="home"
          component={ Home }
          hideNavBar={true}
          passProps={true}
          onPress={props.onPress}
          initial
        />

        <Scene
          key="event"
          component={ Event }
          hideNavBar={true}
          passProps={true}
          onPress={props.onPress}
        />

        <Scene
          key="about"
          component={ About }
          hideNavBar={true}
          passProps={true}
          onPress={props.onPress}
        />

        <Scene
          component={ Chat }
          key="chat"
          hideNavBar={ true }
        />

        <Scene
          component={ Training }
          key="training"
          hideNavBar={ true }
        />

        <Scene
          key="donate"
          component={ Donate }
          hideNavBar={true}
          passProps={true}
          onPress={props.onPress}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
