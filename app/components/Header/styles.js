import EStyleSheet from 'react-native-extended-stylesheet';

import { StatusBar } from 'react-native';

export default EStyleSheet.create({

    //to place the image anywhere on the screen that is 
    // why position is used 

    container:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,

        /*'@media android': {
            paddingTop:StatusBar.currentHeight,
        },*/
    },

    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },

    icon:{
        width:18,
    },


});