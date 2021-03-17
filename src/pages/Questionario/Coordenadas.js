import React, { Component } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firebase from 'react-native-firebase';
import { Spinner } from 'native-base';

import styles from './styles';


export async function request_location_runtime_permission(){
  try{
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
              'title':'ReactNativeCode Location Permission',
              'message':'ReactNativeCode precisa da sua localização'
          }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED){
          console.log('Pemissão concedida!')
      }else{
          console.log('Permissão negada');
      }

  } catch(erro){
      alert(erro)
  }
}

export default class Coordenadas extends Component {
  constructor(props){
    super(props);

    request_location_runtime_permission();

    this.state = {
      latitude : '',
      longitude : '',
      carregandoCoords : false
    }

    const carregaCoords = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual).get()
    .then(snapshot=>{
      this.setState({
        latitude:snapshot._data.latitude,
        longitude:snapshot._data.longitude
      })
    })

  }

  pegaCoordenadas(){
    this.setState({carregandoCoords : true});
    Geolocation.getCurrentPosition(
        ({coords:{latitude,longitude}}) => {
            this.setState({latitude, longitude, carregandoCoords : false})
            const salvaCoords = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual).set({
              latitude,
              longitude
            },{merge:true})
        },
        (error) => {
          alert('veio')
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button2} onPress={()=>{this.pegaCoordenadas()}}>
          <Text style={styles.textButton2}>Pegar Coordenadas</Text>
        </TouchableOpacity>
        {this.state.latitude ? 
          <View style={styles.contentCoords}>
            <Text style={styles.textTitleCoords}>Latitude:</Text>
            <Text style={styles.textCoords}>{this.state.latitude} </Text>
            <Text style={styles.textTitleCoords}>Longitude:</Text>
            <Text style={styles.textCoords}>{this.state.longitude} </Text>
          </View>
        :  this.state.carregandoCoords ? <Spinner color='green' /> : null  }
      </View>
    )

  }
}

