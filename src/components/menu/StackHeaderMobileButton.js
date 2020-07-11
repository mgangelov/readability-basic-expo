import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, Button } from 'react-native';

export default ({ children, onPress }) => {
  return (
    Platform.OS === 'web' ?
      <Button title="new" onPress={onPress} /> :
      <TouchableOpacity onPress={onPress}>
        <View style={{
          ...customStyles.button,
          margin: 8
        }}>
          {children}
        </View>
      </TouchableOpacity>
  )
};

const customStyles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  })
});