import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './screens/Home';
import User from './screens/User';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrderDetail from './screens/OrderDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false, headerTitle: 'Back to restaurant'}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{headerTitle: 'Back to restaurant'}}
            name="User"
            component={User}
          />
          <Stack.Screen
            options={{headerTitle: 'Back'}}
            name="OrderDetail"
            component={OrderDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
