import React from "react";
import { View, Text, SafeAreaView, StyleSheet,StatusBar  } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "./RowText";
import { weatherType } from "../utilities/weartherType";

const CurrentWeather = ({weatherData}) => {
  const {main,weather} = weatherData
  const { feels_like, temp ,temp_max,temp_min } = main
  const feel = weatherType[weather[0].main]
  return (
    <SafeAreaView style={[styles.container,{backgroundColor:feel.backgroundColor}]}>
      <View style={styles.content}>
      <Feather name={feel.icon} size={100} color='white' />
        <Text style={styles.title}>Current Weather</Text>
        <Text style={styles.temp}>{`${Math.round(temp)}˚`}</Text>
        <Text style={styles.feels}>{`Feels like ${Math.round(feels_like)}˚`}</Text>
         <RowText message1 = {`High: ${Math.round(temp_max)}˚`} message2={`Low: ${Math.round(temp_min)}˚`} contStyles={styles.highLowRaper} messageStyles={styles.feelsLow} message2Styles={styles.feelsLow} />
      </View>
      <RowText message1 = {weather[0].description} message2={feel.message} contStyles={styles.bodyWrapper} messageStyles={styles.description} message2Styles={styles.message} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:StatusBar.currentHeight,
    backgroundColor:'#EBF7FF',
  },
  content: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize:36
  },
  temp:{
    fontSize:48,
    color: 'white',
    fontWeight:'bold',

  },
  feels:{
    fontSize:24,
    color: 'white',
    marginTop:20,
  },
  feelsLow: {
    fontSize:24,
    color: 'white',
  },
  highLowRaper: {
    flexDirection: "row",
    gap:8
  },
  bodyWrapper: {
   justifyContent: 'flex-end',
   alignContent: 'flex-start',
   paddingLeft:25,
   marginBottom:40
  },
  description: {
    color: 'tomato',
    fontSize:48
  },
  message : {
    color:'white', 
    fontSize:24,
    opacity:.8
  }

});

export default CurrentWeather;
