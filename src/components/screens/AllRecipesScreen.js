import { View, Platform, Text, Button } from 'react-native';
import React from 'react';
import defaultStyle from '../../styles/defaultStyle';

export default ({ navigation }) => {
  return (
    < View style = {defaultStyle.container}>
      <Text>This is a placeholder for all recipes screen.</Text>
      <Text>Platform: {Platform.OS}</Text>
    </View>
  )
}