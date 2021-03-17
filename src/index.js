import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Routes from './Routes';
import { Root } from "native-base";



export default props => (   
  <Root>    
    {/* <StatusBar backgroundColor="#0431B4"  translucent={false} />    */}
    <Routes/>
  </Root>
)     



