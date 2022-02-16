import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <View style={styles.restaurantContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <RestaurantItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  restaurantContainer: {
    flex: 1,
  },
});
