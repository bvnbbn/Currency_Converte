'use strict';

import React, { Component } from 'react';
import { View, Text, StatusBar  } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74'; 


class Home extends Component{

    handlePressBaseCurrency = () => {

        console.log('press base');
    }

    handlePressQuoteCurrency = () => {
        console.log('press quote');
    }


    //render the UI on screen in app
    render(){

        return(

            <Container>

                <Logo />

                <InputWithButton
                    buttonText ={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue = {TEMP_BASE_PRICE}
                    keyboardType = "numeric"

                />

                <InputWithButton
                    buttonText ={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    value = {TEMP_QUOTE_PRICE}
                />    
        
            </Container>
        );


    }


}

export default Home;



