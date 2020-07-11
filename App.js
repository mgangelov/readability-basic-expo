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
  HomeScreen,
  AddRecipeScreen
} from './src/components/screens';
import { Button } from 'react-native';

const Stack = createStackNavigator();
const AllRecipesStack = createStackNavigator();
const AddRecipeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainBody = ({ navigation }) => {
  return (
    <Stack.Navigator mode="modal" initialRouteName="Home">
      <Stack.Screen
        name="HomeInStack"
        component={HomeScreen}
        options={
          {
            headerTitle: 'Test header title',
            headerRight: () => (
              <StackHeaderMobileButton onPress={() => navigation.navigate('AddRecipeWorkflow', { screen: 'Step1' })}>
                <AddIcon width={"30rem"} height={"30rem"} />
              </StackHeaderMobileButton>
            )
          }
        }
      />
      <Stack.Screen
        name="AddRecipeWorkflow"
        component={AddRecipePage}
        options={
          {
            headerShown: false
          }
        }
      />
    </Stack.Navigator>
  );
}

const AllRecipesPage = ({ navigation }) => {
  return (
    <AllRecipesStack.Navigator screenOptions={{ title: 'Recipes' }}>
      <AllRecipesStack.Screen name="Recipes" component={AllRecipesScreen} />
    </AllRecipesStack.Navigator>
  );
}

const AddRecipePage = ({ navigation }) => {
  return (
    <AddRecipeStack.Navigator>
      <AddRecipeStack.Screen
        name="Step1"
        component={AddRecipeScreen}
        options={
          {
            title: 'Add recipe'
          }
        }
      />
      <AddRecipeStack.Screen name="Compare" component={CompareParseScreen} options={{ title: 'Compare parsings' }} />
      <AddRecipeStack.Screen name="Quill" component={QuillJsEditorScreen} options={{ title: 'Additional modifications' }} />
    </AddRecipeStack.Navigator>
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
              return (<Kitchen3 width={'100%'} height={'100%'} />);
            }
          }
        } />
        <Tab.Screen name="Recipes" component={AllRecipesPage} options={
          {
            title: 'Recipes',
            tabBarIcon: ({ focused, size, color }) => {
              return <RecipeBook width={'100%'} height={'100%'} />;
            }
          }
        } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}