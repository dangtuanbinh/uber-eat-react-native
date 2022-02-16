import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RestaurantImage = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="hearto" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantImage;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 1000,
    top: 15,
    right: 15,
  },
});
