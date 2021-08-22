import * as React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import getHolidays from "./serviceWrapper";
import generateCurrentYear from "./calendarUtilities.js";
import ListView from "./ListView";
import CalendarView from './CalendarView'
import { useState, useEffect } from "react";

export default function App() {
  const Tab = createBottomTabNavigator();

  const [currentYear, setCurrentYear] = useState([]);

  useEffect(() => {
    getHolidays(2021, "IT").then((result) => {
      setCurrentYear(generateCurrentYear(result.data));
    });
  });

  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "List") {
                iconName = "list"
              } else if (route.name === "Calendar") {
                iconName = "calendar"
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="List" children={()=><ListView currentYear={currentYear}/>} /> 
          <Tab.Screen name="Calendar" children={()=><CalendarView currentYear={currentYear}/>} /> 
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
