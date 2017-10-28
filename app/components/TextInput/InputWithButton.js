import React, {PropTypes } from 'react';
import { 
    View, 
    Text, 
    TouchableHighlight,
    TextInput
} from 'react-native';

import styles from './styles';

import color from 'color';





const InputWithButton = (props) =>{


    //destructuring (taking the data from the props)
   const {onPress, buttonText, editable = true} = props;

    //color defined manually to appear when the user taps on th button 
   const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)

   const containerStyles = [styles.container];

   if(editable === false){

    containerStyles.push(styles.containerDisabled);


   }

    return(

    <View style = {containerStyles}>

        <TouchableHighlight 
            underlayColor = {underlayColor}
            style ={styles.buttonContainer} 
            onPress = {onPress}>

            <Text style = {styles.buttonText}> {buttonText} </Text>
        </TouchableHighlight>
        <View style = {styles.border}/>
        <TextInput 
            style = {styles.input}
            {...props}
             underlineColorAndroid = "transparent" />

    </View>
    );
};


InputWithButton.PropTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
}

export  default InputWithButton;




