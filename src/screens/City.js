import React from 'react'
import { View, Text, SafeAreaView,Image, StyleSheet,StatusBar, ImageBackground  } from "react-native";
import UpcomingWeather from './UpcommingWeather';
import { Feather } from '@expo/vector-icons';
import IconText from './iconText';
import moment from 'moment';
const City = ({cityData}) => {
const {name,country,population, sunrise,sunset} = cityData
  return (
    <SafeAreaView style={styles.cont}>
         {/* <UpcomingWeather/> */}
         <ImageBackground source={require('../../assets/city-bg.jpg')} style ={styles.img}>
         <Text style={[styles.city,styles.cityText]} >{name}</Text>
         <Text style={[styles.country,styles.cityText]} >{country}</Text>
         <View style={[styles.populationWrapper,styles.rowWrapper]}>
            <IconText iconName={'user'}  iconColor={'white'} bodyText={population === 0 ? `population : N/A` : `population: ${population}`} bodyTextStyles={styles.populationText}/>
         </View>
         <View style={[styles.risSetWrapper,styles.rowWrapper]}>
            <IconText iconName={'sunrise'}  iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={styles.riseSetText}/>
            <IconText iconName={'sunset'}  iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={styles.riseSetText}/>
         </View>
         </ImageBackground>
         
     </SafeAreaView>
  )


}
const styles = StyleSheet.create({
    cont: {
        flex:1,
        // marginTop:StatusBar.currentHeight,
    }, 
    img: {
        flex:1
    },
    city:{
        fontSize:36,  
        marginTop:40 
    },
    country:{
        fontSize:28,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight:'bold',
        color:'white'
    },
    populationWrapper:{
         justifyContent: 'center',
         marginTop: 30
    },
    populationText : {
          fontSize:25,
          marginLeft:7.5,
          color: 'white',
          fontWeight: 'bold'
    },
    risSetWrapper:{
   
     justifyContent:'space-around',
     marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    rowWrapper:{
        flexDirection:'row',
        alignItems:'center',
    }

})
export default City