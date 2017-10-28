import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';


import Home from './screens/Home';


EStyleSheet.build({

  $primaryBlue: '#4F607A',
  $white:'FFFFFF',

});

export default () => <Home />;