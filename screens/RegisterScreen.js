import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwsomes from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({navigation}) => {
  const submit = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Uber eat</Text>

      <View>
        <Text style={styles.title}>Create your Account</Text>
        <View>
          <TextInput style={styles.textInput} placeholder="User name" />
          <TextInput style={styles.textInput} placeholder="Password" />
          <TextInput style={styles.textInput} placeholder="Confirm password" />
          <Button onPress={submit} title="Submit" />
        </View>
      </View>

      <View style={styles.alternateLogin}>
        <Text>Or sign in with</Text>
        <View style={styles.iconContainer}>
          <EvilIcons name="sc-google-plus" size={24} />
          <EvilIcons name="sc-facebook" size={24} />
          <FontAwsomes name="instagram" size={24} />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 25,
    backgroundColor: 'white',
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
