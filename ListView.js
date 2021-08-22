import * as React from "react";
import { FlatList, View, Dimensions, Button, ScrollView } from "react-native";
import { ListItem, Card } from "react-native-elements";
import moment from "moment";
import "moment/locale/it";

var dayMap = {};

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
        dayMap[item.id] = y;
      }
    }}
  >
    <ListItem.Content>
      <ListItem.Title>
        {moment(item.date).locale("it").format("dddd, D MMMM YYYY")}
      </ListItem.Title>
      <ListItem.Subtitle>
        {item.holidayName} - {item.id}
      </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

var dayList;

function ListView(props) {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ borderColor: "black", borderWidth: 1, flex: 1 }}>
        <Button
          onPress={() =>
            dayList.scrollTo({ x: 0, y: dayMap[1019114621], animated: false })
          }
          title="Capodanno"
        ></Button>
        <Button
          onPress={() =>
            dayList.scrollTo({ x: 0, y: dayMap[1019204060], animated: false })
          }
          title="Festa liberazione"
        ></Button>
      </View>
      <ScrollView
        ref={(ref) => (dayList = ref)}
      >
        <Card>
          {props.currentYear.map((date, i) => renderItem(date))}
        </Card>
      </ScrollView>
    </View>
  );
}

export default React.memo(ListView);
