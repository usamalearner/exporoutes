import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from '../screens/home';
import About from '../screens/about';
import Contact from '../screens/contact';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
          title:"My home Screen",
          headerStyle:{backgroundColor:"orange"},
            headerTitle:props=> <Image style={{height:100,width:100,resizeMode:"contain"}} source={{uri:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}}/>
}} 
      
      name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;