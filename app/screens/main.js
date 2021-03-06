import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/viewContainer';

class Main extend React.component {
  render(){
    return (
      <ViewContainer>
        <View style={styles.container}>
        <Text style={styles.welcome}>
        Welcome to React Native/Redux Boilerplate!
        </Text>
        <Text style={styles.instructions}>
        To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
        </Text>
        </View>
      </ViewContainer>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main;
