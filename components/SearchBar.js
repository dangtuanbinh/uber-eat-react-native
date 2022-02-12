import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.leftButton}>
            <MaterialIcons name="location-on" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            <AntDesign style={styles.rightIcon} name="clockcircle" size={11} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 5,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  leftButton: {
    marginLeft: 10,
  },
  rightButton: {
    marginRight: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 9,
    borderRadius: 30,
  },
  rightIcon: {
    marginRight: 6,
  },
});
