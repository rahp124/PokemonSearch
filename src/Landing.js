import React from 'react';
import { StyleSheet, Text, View, Platform, Image, ImageBackground} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');
class Landing extends React.Component {
    render(){
      return (
      <View style = {styles.container}>
        <ImageBackground source = {myBackground} style = {styles.viewStyle}>
          <Text style = {styles.titleStyle}>Welcome to PokeSearch</Text>
          <Button
            block = {true}
            style = {styles.buttonStyle}
            onPress = {() =>this.props.switchScreen("search")}
          >
            <Text  style = {styles.buttonText}>Start Searching!</Text>
          </Button>
        </ImageBackground>
      </View>
    );
    }
}
const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 34 : 24
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
  },
  buttonStyle:{
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  }
}
export default Landing;