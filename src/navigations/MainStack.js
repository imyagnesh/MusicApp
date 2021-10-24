import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from './HomeTab';

const Main = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        getComponent={() => require('../pages/Login').default}
      />
      <Main.Screen
        options={{
          headerShown: false,
        }}
        name="HomeTab"
        component={HomeTab}
      />
    </Main.Navigator>
  );
};

export default MainStack;
