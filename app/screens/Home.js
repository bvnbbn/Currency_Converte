'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StatusBar, KeyboardAvoidingView  } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount} from '../actions/currencies'
import { connect } from 'react-redux';




const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74'; 
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;


class Home extends Component{

    static propTypes = {

        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency:PropTypes.string,
        quoteCurrency:PropTypes.string,
        amount:PropTypes.number,
        conversionRate: PropTypes.number,
        lastConvertedDate: PropTypes.object,
        isFetching: PropTypes.bool,

    };

    handleChangeText = (text) => {
        this.props.dispatch(changeCurrencyAmount(text));

       // console.log(changeCurrencyAmount(text));


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

        this.props.dispatch(swapCurrency()); 
        // changing the state of application

        //console.log(swapCurrency());
      
    };


    handleOptionsPress = () => {
        console.log('options pressed ');
        this.props.navigation.navigate('Options');
    };


    //render the UI on screen in app
    render(){


        let quotePrice = '...';
            if (!this.props.isFetching) {
              quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
            }

        return(

            <Container>

                <StatusBar backgroundColor="blue" barStyle="light-content"/>

                <Header onPress={this.handleOptionsPress} />

                <KeyboardAvoidingView behavior = 'padding'>

                <Logo />

                <InputWithButton
                    buttonText ={this.props.baseCurrency}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue = {this.props.amount.toString()}
                    keyboardType = "numeric"// for displaying the numeric keyboard 
                    onChangeText = {this.handleChangeText}
                />

                <InputWithButton
                    buttonText ={this.props.quoteCurrency}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    value = {TEMP_QUOTE_PRICE}
                />

                <LastConverted
                    date={this.props.lastConvertedDate}
                    base={this.props.baseCurrency}
                    quote={this.props.quoteCurrency}
                    conversionRate={this.props.conversionRate}
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


const mapStateToProps = (state) => {

    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        isFetching: conversionSelector.isFetching,
    };
};

export default connect(mapStateToProps)(Home);



