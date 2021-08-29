import * as React from "react";
import { FlatList, View, Dimensions, Button, ScrollView } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { hashCode } from "./calendarUtilities.js";
import moment from "moment";
import "moment/locale/it";

var dayMap = {};
var dayList;

var renderItem = (item) => (
  <ListItem
    bottomDivider
    key={item.id.toString()}
    containerStyle={{
      backgroundColor:
        item.isWeekend || item.isHoliday ? "#C9E4C5" : "whitesmoke",
    }}
    onLayout={(event) => {
      if (event && event.nativeEvent && event.nativeEvent.layout) {
        let y = event.nativeEvent.layout.y;
        dayMap[item.id] = Math.trunc(y)
      }
    }}
  >
    <ListItem.Content>
      <ListItem.Title>
        {moment(item.date).locale("it").format("dddd, D MMMM YYYY")}
      </ListItem.Title>
      <ListItem.Subtitle>
        {item.holidayName}
      </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

const renderButton = (item) => (
  <Button
      key={item.id.toString()}
      onPress={() => dayList.scrollTo({ x: 0, y: dayMap[item.id], animated: false }) }
      title={item.localName}></Button>
  );

function ListView(props) {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ borderColor: "black", borderWidth: 1, flex: 1 }}>
       {props.holidays.map((holiday) => renderButton(holiday))}
      </View>
      <ScrollView
        ref={(ref) => (dayList = ref)}>
        <Card>
          {props.currentYear.map((date, i) => renderItem(date))}
        </Card>
      </ScrollView>
    </View>
  );
}

export default React.memo(ListView);
