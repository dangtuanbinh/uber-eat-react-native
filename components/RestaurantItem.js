import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RestaurantImage from './basic/RestaurantImage';
import RestaurantInfo from './basic/RestaurantInfo';

export const restaurantItem = [
  {
    image: require('../assets/images/restaurant-1.png'),
    name: 'Pot Au Feu.',
    waitingTime: '30-45 mins',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    rating: '4.5',
  },
  {
    image: require('../assets/images/restaurant-2.png'),
    name: 'The Aviary.',
    waitingTime: '25-30 mins',
    categories: ['Soft-drinks', 'Fast Foods'],
    price: '$$',
    rating: '3.5',
  },
  {
    image: require('../assets/images/restaurant-3.png'),
    name: 'Brass Tacks.',
    waitingTime: '12-20 mins',
    categories: ['Deals', 'Bar'],
    price: '$$',
    rating: '4.0',
  },
  {
    image: require('../assets/images/restaurant-4.png'),
    name: 'Cibo Matto.',
    waitingTime: '20-25 mins',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    rating: '4.5',
  },
  {
    image: require('../assets/images/restaurant-5.png'),
    name: 'Catch 35.',
    waitingTime: '18-25 mins',
    categories: ['Desserts', 'Bar'],
    price: '$$',
    rating: '3.0',
  },
];

const RestaurantItem = ({restaurantData}) => {
  return (
    <View>
      {restaurantData?.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          activeOpacity={1}>
          <RestaurantImage image={restaurant.image} />
          <RestaurantInfo
            name={restaurant.name}
            waitingTime={restaurant.waitingTime}
            rating={restaurant.rating}
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
