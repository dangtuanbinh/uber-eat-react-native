import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, {restaurantItem} from '../components/RestaurantItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const YELP_API_KEY =
  'wiBhLX0bQjfly0yC1b7ZKUEY0PgucFYxs8aOiaJkSVYbarQLpCYDI5_CTe-o_V8NKncwi5Iw9GLz3ziA3j8kbX6FhOXIJtxiaT_InHOIaUq945f-GG5toAcXT2kSYnYx';

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(restaurantItem);

  // const getRestaurantFromYelpAPI = async () => {
  //   const data = axios
  //     .get(`https://api.yelp.com/v3/businesses/search?location=usa`, {
  //       headers: {
  //         Authorization: `Bearer ${YELP_API_KEY}`,
  //       },
  //       params: {
  //         term: 'restaurants',
  //       },
  //     })
  //     .then(res => setRestaurantData(res.data))
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getRestaurantFromYelpAPI();
  // }, []);

  const goToUserScreen = () => {
    navigation.navigate('User');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
        <TouchableOpacity style={styles.userIcon} onPress={goToUserScreen}>
          <FontAwesome name="user-circle-o" size={28} />
        </TouchableOpacity>
      </View>
      <Categories />
      <View style={styles.restaurantContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <RestaurantItem restaurantData={restaurantItem} />
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
    position: 'relative',
  },
  restaurantContainer: {
    flex: 1,
  },
  userIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
