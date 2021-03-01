/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  const [value1, onChangeText1] = React.useState('type something1...');
  const [value2, onChangeText2] = React.useState('type something2...');
  const [isFocusEnabled, setIsFocusEnabled] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setIsFocusEnabled(true);
      alert('Screen was focused');
      return () => {
        // Do something when the screen is unfocused
        setIsFocusEnabled(false);
        alert('Screen was unfocused');
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Toggle textinput focusability"
        onPress={() => setIsFocusEnabled(!isFocusEnabled)}
      />
      <TextInput
        focusable={isFocusEnabled ? true : false}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText1(text)}
        value={value1}
      />
      <TextInput
        focusable={isFocusEnabled ? true : false}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText2(text)}
        value={value2}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  const [value3, onChangeText3] = React.useState('type something2...');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'black'}}>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText3(text)}
        value={value3}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;