/**
 * React Native Boilerplate
 * https://github.com/jefflau/react-native-boilerplate
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './app/app';

class reactNativeBoilerplate extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('reactNativeBoilerplate', () => reactNativeBoilerplate);
