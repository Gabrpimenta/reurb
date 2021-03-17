import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

import Main from './pages/Main';
import Login from './pages/Login';
import Preload from './pages/Preload'
import Questionario from './pages/Questionario'



console.disableYellowBox = true;


export default props  => (
    <Router>
        <Scene 
            key='root' 
            navigationBarStyle={{backgroundColor: '#8bc73e'}} 
            renderTitle={() => (
                <View>
                  <Image style={styles.image} source={require('../assets/logo2.png')} />
                </View>
              )} >
            <Scene key='preload' component={Preload} hideNavBar/>
            <Scene key='main' component={Main} />
            <Scene key='login' component={Login} hideNavBar/>
            <Scene key='questionario' component={Questionario} />
        </Scene>
    </Router>
);


// esconde botão voltar da sena
// renderLeftButton={()=>(null)}

// coloca botão no navbar do lado direito
// onRight={ ()=> alert('teste')} rightButtonImage={require('../img/marker.png')}

const styles = StyleSheet.create({
    image:{
        resizeMode:'contain',
        height: 40
    }
})