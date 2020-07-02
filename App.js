import React from 'react';
import { StyleSheet, Text, View, Platform, Image, ImageBackground} from 'react-native';
import {Button} from 'native-base';
import Landing from './src/Landing';
import Search from './src/Search';

var myBackground = require('./assets/landing.jpg');
export default class App extends React.Component {
    state = {
      currentScreen: "landing",
    }
    switchScreen = (currentScreen) =>{
      this.setState({currentScreen});
    }
    renderScreen = () => {
      if(this.state.currentScreen === "landing"){
        return(<Landing switchScreen = {this.switchScreen}/>)
      }
      else if(this.state.currentScreen === "search"){
        return(<Search/>)
      }
    }
    render(){
      return (
      <View style = {styles.container}>
        {this.renderScreen()}
      </View>
    );
    }
}
const styles = {
  container: {
    flex: 1,
    
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