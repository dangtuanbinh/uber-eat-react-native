import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RestaurantInfo = ({name, waitingTime, rating}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.waitingTime}>{waitingTime}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.text}>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
  },
  waitingTime: {
    fontSize: 13,
    fontWeight: '500',
  },
  ratingContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#dedede',
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
