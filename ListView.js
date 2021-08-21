import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import getHolidays from "./serviceWrapper";
import generateCurrentYear from "./calendarUtilities.js";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import moment from "moment"

export default function ListView() {
  const [holidays, setHolidays] = useState([]);

  getHolidays(2021, "IT").then((result) => {
    setHolidays(result.data[0]);
  });

  const selectedYear = generateCurrentYear();

  return (
    <ScrollView containerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card containerStyle={{ padding: 0, width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
        {selectedYear.map((date, i) => (
          <ListItem key={i} bottomDivider containerStyle={{ backgroundColor: date.isWeekend ? '#C9E4C5' : 'whitesmoke' }}>
          <ListItem.Content>
            <ListItem.Title>{moment(date.date).locale('it-IT').format('dddd, D MMMM YYYY')}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      </Card>
    </ScrollView>
  );
}
