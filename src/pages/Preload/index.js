import React, { Component } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

// import { Container } from './styles';

import styles from './styles'

export default class Preload extends Component{
  constructor(props){
    super(props)
    this.state = { 
      logoWidth : new Animated.Value(0)
    }

  }
  
  componentDidMount(){
    Animated.timing(this.state.logoWidth, {
      toValue:250,
      duration:1400,
    }).start();
    setTimeout(()=>{Actions.login()},1500)
  }

  render(){
    return (
      <>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Animated.Image style={[styles.image, { width: this.state.logoWidth }]} source={require('../../../assets/logo.png')}  />
        </View>
      </>
    );

  }

}

