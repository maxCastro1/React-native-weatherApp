import React from 'react'
import { View, Text, SafeAreaView,Image, StyleSheet,StatusBar, ImageBackground  } from "react-native";
import UpcomingWeather from './UpcommingWeather';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const {iconName, iconColor, bodyText, bodyTextStyles } = props
    return (
        <View style={styles.container}>
            <Feather name={iconName} size={30} color={iconColor}></Feather>
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
  textTheme:{
    fontWeight: 'bold'
  },
  container:{
    alignItems: 'center'
  }
})
export default IconText;