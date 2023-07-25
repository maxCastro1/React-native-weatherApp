import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList, Image,ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weartherType';
import moment from 'moment/moment';

const ListItem = ({props}) => {
    const { dt_txt, main, weather, condition } = props;
    const { temp_min, temp_max } = main;
   const feels = weatherType[weather[0].main];

    return (
      <View style={[styles.item, {backgroundColor:feels.backgroundColor}]}>
        <View style={styles.up}>
        <Feather name={feels.icon} size={50} color="white" />
        <View style={{flexDirection:'row', gap:10, alignItems:'baseline'}}>
        <Text style = {[styles.date, {fontWeight:'bold',fontSize:24}]}>{moment(dt_txt).format('dddd')}</Text>  
        <Text style = {styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>  
        </View>
        </View>
        <Text style={styles.desc}>{weather[0].description}</Text>
        <View style={styles.up}>
        <Text style = {styles.temp}>{`Min: ${Math.round(temp_min)}˚`}</Text>
        <Text style = {styles.temp}>{`Max: ${Math.round(temp_max)}˚`}</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    item: {
        paddingVertical: 20,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:4,
        backgroundColor: '#F4F7FF',
        opacity:.7,
        paddingStart:20
    
      },
      up:{
        flexDirection:'row',
        alignItems:'baseline',
        gap:20,
        marginBottom:5
      },
      desc:{
        color:"white",
        marginTop:10,
        fontSize:15

      },
      temp: {
        color: 'white',
        fontSize: 20
      }
      , 
      date : {
        color: 'white',
        fontSize: 15
      },
})

export default ListItem