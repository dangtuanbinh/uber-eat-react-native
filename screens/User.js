import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';

import Authentication from './stacks/Authentication';

const User = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <View style={styles.container}>
      {isAuth === false ? <Authentication /> : <Text>User Screen</Text>}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
