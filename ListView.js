
import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import getHolidays from "./serviceWrapper";
import generateCurrentYear from "./calendarUtilities.js"

export default function ListView() {
    const [holidays, setHolidays] = useState([])
    
    getHolidays(2021, 'IT').then((result) => { setHolidays(result.data[0]) }) 

    const selectedYear = generateCurrentYear()

    return (
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Prima festa trovata: {holidays ? holidays.localName : '...'}</Text>
        <Text>Oggi: {selectedYear[0].date.toLocaleDateString('it-IT')}</Text>
      </View>
    );
  }