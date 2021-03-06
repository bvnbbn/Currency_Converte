import React, { Component } from 'react';

import {ScrollView, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../components/List';

import { Ionicons } from '@expo/vector-icons';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class  Options extends Component {

    handleThemesPress = () => {
        console.log('press themes');
    }

    handleSitePress = () => {

        console.log('press site');

    }

    render(){
        return (
            <ScrollView>
                <StatusBar translucent = {false} barStyle ="default"/>
            
                <ListItem 
                    text = "Themes"
                    onPress = {this.handleThemesPress}
                    customIcon={
                       <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} 
                    />
                    }
                />

                <Separator />    

                <ListItem 
                    text = "Fixer.io"
                    onPress = {this.handleSitePress} 
                    customIcon={
                       <Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} 
                    />
                    }
                    
                    
                    />  
                
                
            
            </ScrollView>    




        );

    }




}

export default Options;