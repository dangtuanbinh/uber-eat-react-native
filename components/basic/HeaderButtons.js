import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HeaderButtons = ({text, activeTab, setActiveTab}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === text ? 'black' : 'white',
          paddingHorizontal: 16,
          paddingVertical: 6,
          borderRadius: 30,
        }}
        onPress={() => setActiveTab(text)}>
        <Text
          style={{
            color: activeTab === text ? 'white' : 'black',
            fontSize: 15,
            fontWeight: '900',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({});
