import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, Alert } from 'react-native'; 
import { Container, Header, Content, Button, Fab, ListItem, Text, Left, Body, Right, Switch } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';

import styles from './style';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questionarioAtual : '',
      listaQuestionario : [],
    }

    const cpfOperador = this.props.cpfOperador.toString();
    const questigonarioGet = firebase.firestore().collection('questionarios').where('cpfOperador','==', cpfOperador).onSnapshot(docSnapshot=>{
      this.setState({ listaQuestionario : docSnapshot._docs })
    })


  }

  _addQuestionario(){
    let meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let data = new Date();
    let hora = data.toLocaleTimeString().split(" ")[0];
    let mes = meses[data.getMonth()];
    let ano = data.getFullYear();
    let dia = data.getDate();
    var dataHoje = `${dia} ${mes} ${ano} ${hora}`

    const addQuestionarioRef = firebase.firestore().collection('questionarios').add({
      dataCreate : dataHoje,
      cpfOperador : this.props.cpfOperador
    })
    .then(ref =>{
      this.setState({questionarioAtual : ref.id}) 
      Actions.questionario({ tipo:'novo', questionarioAtual : ref.id.toString()})
    })
  }

  _editarQuestionario(item){
    Actions.questionario({ tipo:'edita', questionarioAtual : item})
  }

  _removeQuestionario(item){
    Alert.alert(
      'Atenção!',
      'Deseja realmente excluir o questionario?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => {
          const removeQuestionario = firebase.firestore().collection('questionarios').doc(item).delete();
          const removeMorador = firebase.firestore().collection('morador').where('idQuestionario','==', item).get()
          .then(snapshot => {
            snapshot._docs.map(dado => {
              firebase.firestore().collection('morador').doc(dado._ref._documentPath._parts[1]).delete();
            })
          })
          const removeFotos = firebase.firestore().collection('fotos').where('idQuestionario','==', item).get()
          .then(snapshot =>{
            snapshot._docs.map(dado => {

              firebase.storage().ref().child(`${item}/${dado._data.nome}.jpg`).delete();
              firebase.firestore().collection('fotos').doc(dado._ref._documentPath._parts[1]).delete();
            })
          })

        }},
      ],
      {cancelable: false},
    );
    
  }

  render(){
    return(

      <Container>
        <StatusBar barStyle='ligth-content' hidden={false} backgroundColor='#6e9f2d'/>
        <Text 
        style={{
          fontSize:20,
          color:'#999',
          textAlign:'center',
          marginVertical:5,
          borderBottomWidth:1,
          borderBottomColor:'#e9e9e9',
          paddingBottom:8
        }}>Pesquisas realizadas</Text>
        <Content>
          {this.state.listaQuestionario.map(item => {
            return(
              <ListItem key={item.id} icon>
                <Body>
                  <Text style={{fontSize:16}}>{item._data.dataCreate}</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={()=>{this._editarQuestionario(item.id)}}>
                      <Icon style={{color:'#cca300', fontSize:24}} name="edit" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this._removeQuestionario(item.id)}}>
                    <Icon style={{color:'#b32400', fontSize:26, marginLeft:10}} name="trash" />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            )
          })} 
          <View style={{height:100}}/>
        </Content>

        <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#6e9f2d', justifyContent:'center', alignItems:'center'}}
            position="bottomRight"
            onPress={()=>{this._addQuestionario()}}
            >
            <Text style={{marginTop:-5, fontSize:40}}>+</Text>    
        </Fab>

    </Container>
    )
  }
}
