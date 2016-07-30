import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { colours } from './styles/globals';
import { dispatch } from 'redux';

import Main from './screens/main';

const Routes = ({ dispatch}) => (
  <Router
    hideNavBar={false}
    titleStyle={styles.title}
    navigationBarStyle={styles.navBar}
    leftButtonIconStyle={styles.leftButton}
  >
    <Scene key="main"
      title="Home"
      component={Main}
      initial={true}
      rightTitle={'Filter'}
      rightButtonTextStyle={styles.rightButton}
      onRight={()=> console.log('filter')}
    />
  </Router>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colours.darkestGrey,
  },
  title: {
    color: 'white'
  },
  leftButton: {
    tintColor: 'white'
  },
  rightButton: {
    color: 'white'
  }
})

export default connect()(Routes);
