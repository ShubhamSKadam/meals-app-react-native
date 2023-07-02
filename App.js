import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
