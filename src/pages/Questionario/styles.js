import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10
  },
  container3:{
    padding:10
  },
  corFundo:{
    backgroundColor: '#6e9f2d', 
  },
  branco:{
    color:'#fff'
  },
  text:{
    color:'#999',
    marginVertical:4
  },
  Input:{
    borderWidth:1,
    borderColor:'#e9e9e9',
    paddingHorizontal:10,
    fontSize:17,
    marginBottom:10,
    color:'#999'
  },
  Select:{
    borderWidth:1,
    borderColor:'#e9e9e9',
    marginBottom:10,
  },
  button:{
    backgroundColor:'#6e9f2d',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    borderRadius:33,
    marginVertical:10
  },
  textButton:{
    color:'#fff',
    fontSize:20
  },
  button2:{
    backgroundColor:'#6e9f2d',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    borderRadius:33,
    marginVertical:10
  },
  textButton2:{
    color:'#fff',
    fontSize:18
  },
  textButton3:{
    color:'#999',
    fontSize:18
  },
  textLsMoradores:{
    fontSize:20,
    color:'#999',
    textAlign:'center',
    marginTop:20,
    borderBottomWidth:1,
    borderBottomColor:'#e9e9e9',
    paddingBottom:10
  },
  // CADASTRO
  containerCad:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  textCad:{
    fontSize:30, 
    color:'#999', 
    textAlign:'center'
  },
  contentBtnCad:{
    flexDirection:'row', 
    width:'100%', 
    height:80, 
    alignItems:'center', 
    justifyContent:'center'
  },
  buttonCad:{
    backgroundColor:'#6e9f2d',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    width:'70%',
    borderRadius:33,
    marginVertical:10,
    marginHorizontal:5
  },
  foto:{
    margin:5,
    width: (width - 55) / 2,
    height: (width - 55) / 2,
    backgroundColor: '#e9e9e9'
  },
  contentFoto:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  carregandoImg:{
    marginBottom:15,
    width: (width - 55) / 2,
    height: (width - 55) / 2,
  },
  contentCoords:{
    height:'85%',
    width: '100%',
    paddingVertical:50,
    justifyContent:'center',
    alignItems:'center'
  },
  textTitleCoords:{
    fontSize:15,

  },
  textCoords:{
    fontSize:30,
    color:'#333'
  }
  
  
})

export default styles;

