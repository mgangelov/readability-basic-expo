import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddIcon from './assets/addIcon.svg';
import Kitchen3 from './assets/kitchen3.svg';
import RecipeBook from './assets/recipeBook.svg';

import StackHeaderMobileButton from './src/components/menu/StackHeaderMobileButton';

import {
  QuillJsEditorScreen,
  CompareParseScreen,
  AllRecipesScreen,
  HomeScreen
} from './src/components/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainBody = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerTitle: 'Test header title',
        headerRight: () => (
          <StackHeaderMobileButton>
            <AddIcon width={"30rem"} height={"30rem"} />
          </StackHeaderMobileButton>
        )
      }}/>
      <Stack.Screen name="Compare" component={CompareParseScreen} options={{title: 'Compare parsings'}}/>
      <Stack.Screen name="Quill" component={QuillJsEditorScreen} options={{title: 'Additional modifications'}}/>
    </Stack.Navigator>
  );
}

const AllRecipesPage = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{title: 'Recipes'}}>
      <Stack.Screen name="Recipes" component={AllRecipesScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main Body"
        tabBarOptions={{
          labelStyle: {
          },
          style: {
            padding: 10
          }
        }}
      >
        <Tab.Screen name="Main Body" component={MainBody} options={
          {
            title: 'Home',
            tabBarIcon: ({ focused, size, color }) => {
              return (<Kitchen3 width={'100%'} height={'100%'}/>);
            }
          }
        }/>
        <Tab.Screen name="Recipes" component={AllRecipesPage} options={
          {
            title: 'Recipes',
            tabBarIcon: ({ focused, size, color }) => {
              return <RecipeBook width={'100%'} height={'100%'}/>;
            }
          }
        }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}