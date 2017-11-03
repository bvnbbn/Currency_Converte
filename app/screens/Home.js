'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar, KeyboardAvoidingView  } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import {  Header } from '../components/Header';



const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74'; 
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;


class Home extends Component{

    static propTypes = {

        navigation: PropTypes.object,
    };

    handlePressBaseCurrency = () => {

        console.log('press base');
        //since home screen is directly attached through the Stack navigator class so Stack Navigator 
        //is the parent class for the Home screen so we can 
        //pass the arguements through the props 
        this.props.navigation.navigate('CurrencyList' , {title: 'BaseCurrency'});
    };

    handlePressQuoteCurrency = () => {
        console.log('press quote');
        this.props.navigation.navigate('CurrencyList', {title: 'QuoteCurrency'});
    };

    handleSwapCurrency = () => {
        console.log('press quote');
    };


    handleOptionsPress = () => {
        console.log('options pressed ');
        this.props.navigation.navigate('Options');
    };


    //render the UI on screen in app
    render(){

        return(

            <Container>

                <StatusBar backgroundColor="blue" barStyle="light-content"/>

                <Header onPress={this.handleOptionsPress} />

                <KeyboardAvoidingView behavior = 'padding'>

                <Logo />

                <InputWithButton
                    buttonText ={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue = {TEMP_BASE_PRICE}
                    keyboardType = "numeric"// for displaying the numeric keyboard 

                />

                <InputWithButton
                    buttonText ={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    value = {TEMP_QUOTE_PRICE}
                />

                <LastConverted
                    date={TEMP_LAST_CONVERTED}
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    conversionRate={TEMP_CONVERSION_RATE}
                />


                <ClearButton 
                    onPress = {this.handleSwapCurrency}
                    text = "Reverse Currencies"
                    
                />   

            </KeyboardAvoidingView>

        
            </Container>
        );


    }


}

export default Home;



