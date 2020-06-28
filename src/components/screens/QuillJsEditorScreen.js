import { View, Platform, Text, Button } from 'react-native';
import WebViewQuillJS from 'react-native-webview-quilljs';
import React from 'react';
import defaultStyle from '../../styles/defaultStyle';

export default ({ navigation }) => {
  return (
    < View style = {defaultStyle.container}>
      <Text>Placeholder for import recipe - editor stage.</Text>
      {Platform.OS === 'ios' ?
        <WebViewQuillJS
          initialContent='<p>Hello World</p>'
          backgroundColor = {
            "#FAEBD7"
          }
        /> :
        <Text>Platform not yet supported for Quill.JS editor peepoSad.</Text>
      }
      <Button onPress={() => navigation.navigate('Recipes')} title='Finish'/>
    </View>
  )
};
