import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color, focused, size}) => {
            switch (route.name) {
              case 'Home': {
                const Icon = require('../../assets/icons/home.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }

              case 'Favourite': {
                const Icon = require('../../assets/icons/favorite.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }
              case 'Search': {
                const Icon = require('../../assets/icons/search.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }
              case 'Settings': {
                const Icon = require('../../assets/icons/settings.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }
              default:
                return null;
            }
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        getComponent={() => require('../pages/Home').default}
      />
      <Tab.Screen
        name="Favourite"
        getComponent={() => require('../pages/Favourite').default}
      />
      <Tab.Screen
        name="Search"
        getComponent={() => require('../pages/Search').default}
      />
      <Tab.Screen
        name="Settings"
        getComponent={() => require('../pages/Settings').default}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
