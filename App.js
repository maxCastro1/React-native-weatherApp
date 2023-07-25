import React, {useState , useEffect} from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator } from "react-native";
import * as Location from 'expo-location';
import Tabs from "./src/components/Tabs";
import {TEST_KEY} from '@env'
const Tab = createBottomTabNavigator()
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErroItem";
const App = () => {
const [loading, error, weather] = useGetWeather()
 
  if (error){
    return <ErrorItem />
  }
  if (loading || weather.cod === '400' ) {
    return (
      <View style={styles.cont}>
        <ActivityIndicator size={'large'} color={'tomato'}/>
      </View>
      )}
  return (
    <NavigationContainer>
      <Tabs weather={weather}/>
    </NavigationContainer>

  )
 
}
const styles = StyleSheet.create ({
  cont: {
   justifyContent:'center',
   flex:1,
   backgroundColor:'#EBF7FF'
  }
})
export default App;
