import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';


//import Home from './screens/Home';

import Navigator from './config/routes';



EStyleSheet.build({

  $primaryBlue: '#4F607A',
  $white:'#FFFFFF',
  $lightGray: '#F0F0F0', 
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',

});

export default () => <Navigator />;