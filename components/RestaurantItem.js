import {StyleSheet, View} from 'react-native';
import React from 'react';
import RestaurantImage from './basic/RestaurantImage';
import RestaurantInfo from './basic/RestaurantInfo';

const items = [
  {
    image: require('../assets/images/restaurant-1.png'),
  },
  {
    image: require('../assets/images/restaurant-2.png'),
  },
  {
    image: require('../assets/images/restaurant-3.png'),
  },
  {
    image: require('../assets/images/restaurant-4.png'),
  },
  {
    image: require('../assets/images/restaurant-5.png'),
  },
];

const RestaurantItem = () => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index}>
          <RestaurantImage image={item.image} />
          <RestaurantInfo />
        </View>
      ))}
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    
  },
});
