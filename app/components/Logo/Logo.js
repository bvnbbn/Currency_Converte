import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

//declaring a stateless function that will implicitly 
//return the what is to be diaplayed on the screen 

const Logo = () => (

    <View style={styles.container}>
        <Image 
            resizeMode="contain" //will wrap  the image according to the parent image  
            style = {styles.containerImage} 
            source={require('./images/background.png')}>
            <Image
                resizeMode="contain" 
                style ={styles.image}
                source={require('./images/logo.png')}/>
            
        </Image>    
        <Text style ={styles.text}> Currency Converter</Text>
    </View>
);

export default Logo;
