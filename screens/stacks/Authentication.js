import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';

const Stack = createStackNavigator();
const Authentication = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterScreen"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
