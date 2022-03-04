import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Order from '../Order';
import Deal from '../Deal';
import History from '../History';
import Settings from '../Settings';

const Tab = createMaterialBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Order" component={Order} />
    <Tab.Screen name="Deal" component={Deal} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
