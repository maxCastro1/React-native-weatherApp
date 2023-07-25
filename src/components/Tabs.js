import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';
import CurrentWeather from "../screens/CurrentWeather";
import UpcommingWeather from "../screens/UpcommingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name={'Current'} options={{
                tabBarIcon: ({ focused }) => <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />,
                headerTitleAlign: 'center',
                headerTintColor: 'tomato',
                headerStyle: {
                    backgroundColor: '#EBF7FF',
                }
            }}>
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen name={'Upcomming'} options={{
                tabBarIcon: ({ focused }) => <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'} />,
                headerTitleAlign: 'center',
                headerTintColor: 'tomato',
                headerStyle: {
                    backgroundColor: '#EBF7FF',
                }
            }}>
                {() => <UpcommingWeather weatherData={weather.list} />}
            </Tab.Screen>

            <Tab.Screen name={'City'} options={{
                tabBarIcon: ({ focused }) => <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}
                />,
                headerTitleAlign: 'center',
                headerTintColor: 'tomato',
                headerStyle: {
                    backgroundColor: '#EBF7FF',
                }
            }} >
                  {() => <City cityData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default Tabs;
