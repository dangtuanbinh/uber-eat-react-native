import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const RegisterScreen = ({navigation}) => {
  const submit = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <Button onPress={submit} title="Submit" />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
