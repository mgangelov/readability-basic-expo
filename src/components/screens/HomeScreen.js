import { View, Platform, Text, Button } from 'react-native';
import React from 'react';
import defaultStyle from '../../styles/defaultStyle';
import Duck from '../../../assets/duck.svg';

export default ({ navigation }) => {
  return (
    < View style = {defaultStyle.container}>
      <Text>Placeholder for start page</Text>
      <Duck width={"100%"} height={"100%"}/>
      <Button onPress={() => navigation.navigate('Compare')} title='Import'/>
    </View>
  )
};