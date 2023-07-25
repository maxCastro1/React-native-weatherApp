import React from 'react'
import { View, Text, SafeAreaView,Image, StyleSheet,StatusBar, ImageBackground  } from "react-native";
import UpcomingWeather from './UpcommingWeather';
import { Feather } from '@expo/vector-icons';


const RowText = (props) => {
    const {message1, message2,contStyles,messageStyles,message2Styles} = props
  return (
    <View style={contStyles}>
    <Text style={messageStyles}>{message1}</Text>
    <Text style={message2Styles}>{message2}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

})

export default RowText