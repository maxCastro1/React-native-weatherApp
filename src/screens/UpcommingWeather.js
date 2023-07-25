import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList, Image,ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({weatherData}) => {
  console.log(weatherData)

  const renderItem = ({ item }) => <ListItem props={item}/>;
 
   const Empty = () => (
    <View>
        <Text>Loading ...</Text>
    </View>
   )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/x.jpg')} style={styles.image}>
      <Text style={styles.text}>UpcomingWeather</Text>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        // ItemSeparatorComponent={()=><View style={{backgroundColor:'white' ,height: 1}}></View>}
        ListEmptyComponent={<Empty />}
      />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor:'#EBF7FF',
   
  },
  image:{
   flex:1,
  //  paddingVertical:40,
  },
  text:{
    fontSize:36,
    color:'black',
    fontWeight:'bold',
   marginLeft:'auto',
   marginRight:'auto',
   marginTop:20,
   marginBottom:10

  }
  
});

export default UpcomingWeather;