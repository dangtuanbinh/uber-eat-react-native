import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OrderItem = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')}>
        <View>
          <Text>OrderItem</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
