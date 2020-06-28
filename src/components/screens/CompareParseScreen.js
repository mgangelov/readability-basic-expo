import { View, Platform, Text, Button } from 'react-native';
import React from 'react';
import defaultStyle from '../../styles/defaultStyle';

export default ({ navigation }) => {
  return (
    < View style = {defaultStyle.container}>
      <Text>Placeholder for compare parsings screen.</Text>
      <Text>Platform: {Platform.OS}</Text>
      <Button onPress={() => navigation.navigate('Quill')} title='Next'/>
    </View>
  );
}