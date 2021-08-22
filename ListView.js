import * as React from "react";
import { FlatList, View } from "react-native";
import { ListItem, Card } from "react-native-elements";
import moment from "moment";
import "moment/locale/it";

var keyExtractor = (item) => item.id;

var renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor:
          item.isWeekend || item.isHoliday ? "#C9E4C5" : "whitesmoke",
      }}
    >
      <ListItem.Content>
        <ListItem.Title>
          {moment(item.date).locale("it").format("dddd, D MMMM YYYY")}
        </ListItem.Title>
        <ListItem.Subtitle>{item.holidayName}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
);

export default function ListView(props) {
  return (
    <View style={{ flex: 1 }}>
      
      <FlatList
        containerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        keyExtractor={keyExtractor}
        data={props.currentYear}
        renderItem={renderItem}
      />
    </View>
  );
}
