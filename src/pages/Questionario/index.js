import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import styles from './styles'
import Moradores from './Moradores'
import UndImobiliaria from './UndImobiliaria'
import Fotos from './Fotos'
import Coordenadas from './Coordenadas'
import Cadastro from './Cadastro'

export default class Questionario extends Component{
  constructor(props){
    super(props);
    this.state = {
      teste:'funcionou'
    }
  }
  render(){
    return(
      <Container >
        <StatusBar barStyle='ligth-content' hidden={false} backgroundColor='#6e9f2d' />
        <Tabs renderTabBar={()=> <ScrollableTab style={{backgroundColor:'#6e9f2d'}} />} >
          <Tab heading="Moradores" textStyle={styles.branco} tabStyle={styles.corFundo} activeTabStyle={styles.corFundo} style={{padding:15}} > 
            <Moradores questionarioAtual={this.props.questionarioAtual} tipo={this.props.tipo}/>
          </Tab>
          <Tab heading="Und. Imobiliária" textStyle={styles.branco} tabStyle={styles.corFundo} activeTabStyle={styles.corFundo} style={{padding:15}}>
            <UndImobiliaria questionarioAtual={this.props.questionarioAtual} tipo={this.props.tipo} />
          </Tab>
          <Tab heading="Fotos" textStyle={styles.branco} tabStyle={styles.corFundo} activeTabStyle={styles.corFundo} style={{padding:15}}>
            <Fotos questionarioAtual={this.props.questionarioAtual} tipo={this.props.tipo}  />
          </Tab>
          <Tab heading="Coordenadas" textStyle={styles.branco} tabStyle={styles.corFundo} activeTabStyle={styles.corFundo} style={{padding:15}}>
            <Coordenadas questionarioAtual={this.props.questionarioAtual} tipo={this.props.tipo} />
          </Tab>
          <Tab heading="Cadastro" textStyle={styles.branco} tabStyle={styles.corFundo} activeTabStyle={styles.corFundo} style={{padding:15}}> 
            <Cadastro questionarioAtual={this.props.questionarioAtual} tipo={this.props.tipo} />
          </Tab>
        </Tabs>
      </Container>
      
    )
  }
}
