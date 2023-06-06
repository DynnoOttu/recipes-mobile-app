import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Login,
  Register,
  Splash,
  ForgotPassword,
  RequestPassword,
  ResetPassword,
  AddRecipes,
  Home,
  Comment,
  Profile,
  Search,
  PopularMenu,
  DetailRecipe,
  EditProfile,
  MyRecipes,
  EditRecipes,
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="AddRecipes"
        component={AddRecipes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Comment"
        component={Comment}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const isAuth = useSelector((state) => state.Auth_Login)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splsh">
        {isAuth.data ?
          <>

            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PopularMenu"
              component={PopularMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailRecipe"
              component={DetailRecipe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyRecipes"
              component={MyRecipes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditRecipes"
              component={EditRecipes}
              options={{ headerShown: false }}
            />
          </>
          :
          <>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestPassword"
              component={RequestPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
