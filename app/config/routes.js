import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native'; 

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';



//nesting different navigators 
const HomeStack = StackNavigator({

    Home:{
        screen:Home,
        navigationOptions:{
            header: () =>null,

        },
    },

    Options:{
        screen: Options,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Options',

        }),
    },

});


//will take arguemnet of the screen to appear 
export default StackNavigator({

    Home: {
        //what screen should be rendered  when that screen is there in 
        //the navigator 
        screen: HomeStack,
    
    },

    CurrencyList: {

        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,

        }),

    },


},
    {
        //for appearing screen from bottom to top 
        mode: 'modal',
        // for making the back button little down from statusbar in android 

        cardStyle: { paddingTop: StatusBar.currentHeight},
        //since the navigation is nested for home so we want only one 
        //toolbar for every screen that is renedred from Home screen so header Mode : "none" 
        headerMode:'none', 
    
    
    },

);