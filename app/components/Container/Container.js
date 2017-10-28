import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';


//declaring the stateless function setting children as a prop types
const Container = ({ children }) => (



    //for closing the keyboard when clicked outside of the text input area 
    //keyboard will close automatically when clicked outside the text area 
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>

        <View style ={styles.container}>
            {children}
        </View>

    </TouchableWithoutFeedback>
);

Container.PropTypes = {

    children:PropTypes.any,

};
export default Container;

