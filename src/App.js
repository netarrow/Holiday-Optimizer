import * as React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import getHolidays from "./serviceWrapper";
import { generateCurrentYear, hashCode } from "./calendarUtilities.js";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import { useState, useEffect } from "react";
import { registerRootComponent } from "expo";
import SettingsView from "./SettingsView";
import AboutView from "./AboutView";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App() {
  const Tab = createBottomTabNavigator();

  const [currentYear, setCurrentYear] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [weDays, setweDays] = useState([6, 0]);
  const [isLoaded, setLoaded] = useState(false);

  const getWeDays = async () => {
    try {
      const value = await AsyncStorage.getItem("@weDays");
      return value ? JSON.parse(value) : [];
    } catch (e) {
      console.log(e);
    }
  };

  const init = async function init() {
    console.log('initializing')
    let nonworking = await getWeDays();
    console.log(nonworking);
    getHolidays(2021, "IT").then((result) => {
      result.data.forEach((item) => (item.id = hashCode(item.date.slice(5))));
      setHolidays(result.data);
      setCurrentYear(generateCurrentYear(result.data, nonworking));
    });
  }

  useEffect(() => {
    let asyncCall = async () => { init() }
    if (!isLoaded) {
      asyncCall();
      setLoaded(true);
    }
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "List") {
              iconName = "list";
            } else if (route.name === "Calendar") {
              iconName = "calendar";
            } else if (route.name === "Settings") {
              iconName = "settings";
            } else if (route.name === "About") {
              iconName = "help";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Settings"
          children={() => (
            <SettingsView
              weDays={weDays}
              setweDays={setweDays}
              setLoaded={setLoaded}
              forceInit={init}
            />
          )}
        />
        <Tab.Screen
          name="List"
          children={() => (
            <ListView currentYear={currentYear} holidays={holidays} />
          )}
        />
        <Tab.Screen
          name="Calendar"
          children={() => (
            <CalendarView currentYear={currentYear} holidays={holidays} />
          )}
        />
        <Tab.Screen name="About" children={() => <AboutView />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
