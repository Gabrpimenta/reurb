import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    resizeMode:'contain'
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
})

export default styles;

