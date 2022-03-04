import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwsomes from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
  const goToRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Uber eat</Text>

      <View>
        <Text style={styles.title}>Login to your Account</Text>
        <View>
          <TextInput style={styles.textInput} placeholder="User name" />
          <TextInput style={styles.textInput} placeholder="Password" />
          <Button onPress={goToRegister} title="Sign in" />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.alternateLogin}>
          <Text>Or sign in with</Text>
          <View style={styles.iconContainer}>
            <EvilIcons name="sc-google-plus" size={24} />
            <EvilIcons name="sc-facebook" size={24} />
            <FontAwsomes name="instagram" size={24} />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text>Don't have an Account ?</Text>

          <Text onPress={goToRegister}>Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  contentContainer: {
    alignItems: 'center',
  },
  alternateLogin: {
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#d4d4d4',
    paddingHorizontal: 15,
  },
});
