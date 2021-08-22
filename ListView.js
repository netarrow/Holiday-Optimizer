import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import moment from "moment";
import 'moment/locale/it';

export default function ListView(props) {
 
  return (
    <ScrollView
      containerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        containerStyle={{
          padding: 0,
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {props.currentYear.map((date, i) => (
          <ListItem
            key={i}
            bottomDivider
            containerStyle={{
              backgroundColor: (date.isWeekend || date.isHoliday) ? "#C9E4C5" : "whitesmoke",
            }}
          >
            <ListItem.Content>
              <ListItem.Title>
                {moment(date.date).locale("it").format("dddd, D MMMM YYYY")}
              </ListItem.Title>
              <ListItem.Subtitle>
                {date.holidayName}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
}
