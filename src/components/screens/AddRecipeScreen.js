import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import React from 'react';
import ChoppingBoard from '../../../assets/choppingBoard.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default ({ navigation }) => {
  const [value, onChangeText] = React.useState();

  navigation.setOptions({
    headerRight: () => (
      <Button title='Next' onPress={
        () => navigation.navigate('Compare', {
          test: value
        })
      } />
    ),
    headerLeft: () => (
      <Button title='Cancel' onPress={() => navigation.goBack()} />
    )
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={
        {
          flex: 1,
          alignItems: 'center'
        }
      }
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={
          {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
            height: '100%',
            marginTop: "20%",
            borderColor: 'black',
            // borderWidth: 1
          }
        }>
          <ChoppingBoard width={"100%"} height={"100%"} />
        </View>
        <View style={
          {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%'
          }
        }
        >
          <Text style={
            {
              fontSize: 15,
              color: '#000',
              fontWeight: 'normal',
              fontStyle: 'italic'
            }
          }>
            Please enter the URL of your next favourite recipe:
      </Text>
          <TextInput
            style={
              {
                height: 40,
                width: '96%',
                marginTop: '1%',
                borderColor: '#000000',
                borderBottomWidth: 1,
                borderRadius: 4
              }
            }
            multiline={false}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Text>{value}</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}