import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import OrderItem from '../components/basic/OrderItem';

const orders = [
  {
    id: 1,
    name: 'DeLaRasu',
    address: '108 Wellington, Newyork',
    image: require('../assets/orders/spagheti.png'),
    timeStamp: '2022-3-22',
    orderAt: '09:10',
    pickUpAt: '09:25',
    deliveryAt: '09:50',
    deliveryAddress: '105 Notherside, Newyork',
    total: '29$',
    portion: 3,
    payment: 'cash',
    status: 'Delivering',
  },

  {
    id: 2,
    name: 'Vietnamese Spring Roll',
    address: '100 Washington DC, Newyork',
    image: require('../assets/orders/steak.png'),
    timeStamp: '2022-3-22',
    orderAt: '09:10',
    pickUpAt: '09:25',
    deliveryAt: '09:50',
    deliveryAddress: '105 Notherside, Newyork',
    total: '19$',
    portion: 2,
    payment: 'card',
    status: 'Delivering',
  },

  {
    id: 3,
    name: 'Burger King',
    address: '8 Northlington, Newyork',
    image: require('../assets/orders/burger1.png'),
    timeStamp: '2022-3-22',
    orderAt: '09:10',
    pickUpAt: '09:25',
    deliveryAt: '09:50',
    deliveryAddress: '105 Notherside, Newyork',
    total: '39$',
    portion: 4,
    payment: 'cash',
    status: 'Delivering',
  },

  {
    id: 4,
    name: 'Hesburger',
    address: '18 Northlington, Newyork',
    image: require('../assets/orders/fishandchip.png'),
    timeStamp: '2022-3-22',
    orderAt: '09:10',
    pickUpAt: '09:25',
    deliveryAt: '09:50',
    deliveryAddress: '105 Notherside, Newyork',
    total: '9$',
    portion: 1,
    payment: 'card',
    status: 'Delivering',
  },
];

const Order = () => {
  return (
    <ScrollView style={styles.container}>
      {orders.map((order, id) => (
        <OrderItem key={id} order={order} />
      ))}
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
