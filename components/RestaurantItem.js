import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RestaurantImage from './basic/RestaurantImage';
import RestaurantInfo from './basic/RestaurantInfo';

const items = [
  {
    image: require('../assets/images/restaurant-1.png'),
    name: 'Pot Au Feu.',
    waitingTime: '30-45 mins',
    rating: '4.5',
  },
  {
    image: require('../assets/images/restaurant-2.png'),
    name: 'The Aviary.',
    waitingTime: '25-30 mins',
    rating: '3.5',
  },
  {
    image: require('../assets/images/restaurant-3.png'),
    name: 'Brass Tacks.',
    waitingTime: '12-20 mins',
    rating: '4.0',
  },
  {
    image: require('../assets/images/restaurant-4.png'),
    name: 'Cibo Matto.',
    waitingTime: '20-25 mins',
    rating: '4.5',
  },
  {
    image: require('../assets/images/restaurant-5.png'),
    name: 'Catch 35.',
    waitingTime: '18-25 mins',
    rating: '3.0',
  },
];

const RestaurantItem = () => {
  return (
    <View>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          activeOpacity={1}>
          <RestaurantImage image={item.image} />
          <RestaurantInfo
            name={item.name}
            waitingTime={item.waitingTime}
            rating={item.rating}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
});
