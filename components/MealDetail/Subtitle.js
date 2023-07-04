import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitleText}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 6,
  },
});
