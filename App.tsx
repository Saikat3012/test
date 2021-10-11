/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './src/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    )
  }
} 