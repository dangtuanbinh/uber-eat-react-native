import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft-drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery-items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.categoriesContainer}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
  },
  categoriesContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    marginTop: 5,
  },
});
