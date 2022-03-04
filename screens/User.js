import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';

import Authentication from './stacks/Authentication';
import UserStack from './stacks/UserStack';

const User = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <View style={styles.container}>
      {isAuth === false ? <Authentication /> : <UserStack />}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
