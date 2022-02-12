import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderButtons from './basic/HeaderButtons';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.container}>
      <HeaderButtons
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButtons
        text="Pick-up"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
