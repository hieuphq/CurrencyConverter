/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default () => <Home />;
