import React, { Component } from 'react';
import { View, Image, Text, StatusBar, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import MaskedInput from 'react-native-masked-input-text'
import { Actions } from 'react-native-router-flux';


import styles from './styles';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      cpfOperador : ''
    }
  }

  _logar(){
    let teste = this.state.cpfOperador.toString();

    if(teste.length == 14){
      Actions.main({ cpfOperador : this.state.cpfOperador })
    }else{
      alert('Verifique se o cpf foi digitado corretamente!')
    }

  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar hiden={true}/>
          <ImageBackground style={styles.imgFundo} source={require('../../../assets/fundo.png')}>
          <View style={styles.logo}>
            <View style={styles.fundoLogo}>
              <Image source={require('../../../assets/logo.png')}  />
            </View>
          </View>

          <View style={styles.imput}>
            <Text style={{
              color:'#fff',
              fontSize:22,
              margin:5
            }}>Informe seu CPF:</Text>
            <MaskedInput style={{
              
              textAlign:'center',
              width:'90%',
              color:'#999',
              fontSize:30,
              height:60,
              backgroundColor:'#FFF',
              paddingHorizontal:30,
              borderRadius:33
            }} 
            value={this.state.cpfOperador}
            onChangeText={cpfOperador =>{this.setState({ cpfOperador })}}
            mask={'000.000.000-00'} 
            placeholder={'___.___.___-__'} 
            keyboardType="number-pad" />
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={{
              backgroundColor:'#8bc73e',
              width: '90%',
              height: 60,
              borderRadius: 33, 
              alignItems:'center',
              justifyContent:'center',
            }}
              onPress={()=>{this._logar()}}
            >
              <Text style={{color:'#fff', fontSize:30, fontWeight:'bold'}}>Entrar</Text>

            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

