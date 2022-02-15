import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const RestaurantImage = ({image}) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default RestaurantImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
});
