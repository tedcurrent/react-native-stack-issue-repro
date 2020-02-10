import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, withNavigationFocus } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Repro steps:
// 1. Navigate to details
// 2. Swipe back immediately
// 3. See focused state not change

// NOTE: If you tap the back button, focused works just fine.
const Home = withNavigationFocus(({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen: {String(navigation.isFocused())}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
});

const Details = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home,
  Details
});

export default createAppContainer(AppNavigator);
