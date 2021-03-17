import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ImageBackground, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from 'react-native-firebase';
import { Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import NetInfo from "@react-native-community/netinfo";


import styles from './styles';


export default class Fotos extends Component {
  constructor(props){
    super(props);
    this.state ={
      urlImg:'',
      listaFotos:[],
      carregandoImg:false,
      isConected:true,
      imgsNaoSalvas:[],
      quantImgOff:0
    }
    
    const verificaFotosOff = firebase.firestore().collection('fotosOffline').onSnapshot(docSnapshot=>{

      if(docSnapshot._docs.length > 0){

        docSnapshot._docs.map(item=>{
          const imageRef = firebase.storage().ref().child(`${item._data.idQuestionario}/${item._data.nome}.jpg`)
          imageRef.put(item._data.foto_url)
            .then(()=>{
              let download = imageRef.getDownloadURL()
                .then(dado=>{
                  firebase.firestore().collection('fotos').add({ 
                    idQuestionario : item._data.idQuestionario,
                    foto_url : item._data.foto_url,
                    nome : item._data.nome
                  }).then(abc =>{
                    firebase.firestore().collection('fotosOffline').doc(item.id).delete();
                    let quantImgOff = this.state.quantImgOff - 1
                    this.setState({ quantImgOff })
                  })     
                })
                .catch(erro=>{
                  console.logo(erro)
                })
            })
            .catch(erro => {
              console.log(erro);
            })
        })

      }     
    })

    //listener que verifica se tem internet
    const unsubscribe = NetInfo.addEventListener(state => {
      this.setState({isConected:state.isConnected})
      
    });
    
    //Lista fotos do firebase
    const lsFotosRef = firebase.firestore().collection('fotos').where('idQuestionario','==', this.props.questionarioAtual)
    lsFotosRef.onSnapshot(docSnapshot => {
      this.setState({listaFotos : docSnapshot._docs})
    })

  }//FIM CONSTRUCTOR

  abreFoto(){  
    let nomeBanner = Math.random().toString().replace('.','')
    this.setState({carregandoImg:true})

    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true
    }).then(image => {
      const imagePath = image.path.toString();
      
      const imageRef = firebase.storage().ref().child(`${this.props.questionarioAtual}/${nomeBanner}.jpg`)

      if (this.state.isConected){
        imageRef.put(imagePath)
          .then(()=>{
            let download = imageRef.getDownloadURL()
              .then(dado=>{
                firebase.firestore().collection('fotos').add({ 
                  idQuestionario : this.props.questionarioAtual,
                  foto_url : dado,
                  nome : nomeBanner
                }).then(abc =>{
                  this.setState({ carregandoImg : false })
                })     
              })
              .catch(erro=>{
                console.logo(erro)
                this.setState({ carregandoImg : false })
              })
          })
          .catch(erro => {
            console.log(erro);
            this.setState({ carregandoImg : false })
          })
      }else{
        firebase.firestore().collection('fotosOffline').add({ 
          idQuestionario : this.props.questionarioAtual,
          foto_url : imagePath,
          nome : nomeBanner
        })
        let quantImgOff = this.state.quantImgOff + 1
        this.setState({ quantImgOff })
        this.setState({ carregandoImg : false })
      }
      
    })
    .catch((error) => {
      console.log('Erro no openPicker', error)
      this.setState({ carregandoImg : false })
    })
  
  }// FIM abreFoto()


  _excluiImg(dado){
    Alert.alert(
      'Atenção!',
      'Deseja realmente excluir esta foto?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => {
          let item = this.props.questionarioAtual;
          firebase.storage().ref().child(`${item}/${dado._data.nome}.jpg`).delete();
          const excluiImg = firebase.firestore().collection('fotos').doc(dado.id).delete();
        }},
      ],
      {cancelable: false},
    );
    
  }

  render() {

    return (

      <View>
        { this.state.quantImgOff > 0 ? 
          <Text style={{
            width:'100%',
            height:40,
            backgroundColor:'#F2F5A9',
            textAlign:'center',
            textAlignVertical:'center'
          }}>
            Você tem {this.state.quantImgOff} de foto(s) para sincronizar com banco
          </Text>
        : null } 
        
        { this.state.carregandoImg ? 
          <View> 
            <Spinner color='green' /> 
          </View>  
        :
          <TouchableOpacity style={styles.button2} onPress={()=>{this.abreFoto()}}>
            <Text style={styles.textButton2}>Adicionar Fotos</Text>
          </TouchableOpacity>
        }
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:80}}>
          <View style={styles.contentFoto}>
            {/* <Image style={styles.preview} source={preview} /> */}
            {this.state.listaFotos.map(item=>{
              return( 
                <ImageBackground key={item.id} style={styles.foto} source={{uri:item._data.foto_url}} >
                  <TouchableOpacity onPress={()=>{this._excluiImg(item)}}>
                    <Icon style={{color:'#fff', fontSize:30, margin:9}} name="trash" />
                  </TouchableOpacity>
                </ImageBackground>
              )
            })}
          </View>
          </ScrollView>

      </View>
    )

  }
}

