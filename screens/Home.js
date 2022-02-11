import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
