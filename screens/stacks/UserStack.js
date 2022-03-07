import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Deal from '../Deal';
import History from '../History';
import Settings from '../Settings';
import Order from '../Order';

const Tab = createMaterialBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Order"
      labeled
      shifting={false}
      barStyle={{backgroundColor: 'white'}}
      activeColor="#e66322">
      <Tab.Screen
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <FontAwsomeIcon name="list" color={color} size={20} />
          ),
        }}
        name="Order"
        component={Order}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Deal',
          tabBarIcon: ({color}) => (
            <FontAwsomeIcon name="star-o" color={color} size={20} />
          ),
        }}
        name="Deal"
        component={Deal}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Hitory',
          tabBarIcon: ({color}) => (
            <FontAwsomeIcon name="calendar" color={color} size={20} />
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <AntDesign name="setting" color={color} size={20} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
