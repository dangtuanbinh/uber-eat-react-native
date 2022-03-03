import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  const goToRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  return (
    <View style={styles.container}>
      <Button onPress={goToRegister} title="Register" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
