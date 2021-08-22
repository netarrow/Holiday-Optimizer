import * as React from "react";
import { FlatList, View, Dimensions, Button } from "react-native";
import { ListItem, Card } from "react-native-elements";
import moment from "moment";
import "moment/locale/it";

var keyExtractor = (item) => item.id.toString();

var renderItem = ({ item, i }) => (
    <ListItem
      bottomDivider
      key={i}
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

let dayList = React.createRef()
export default function ListView(props) {
  return (
    <View style={{ flex: 4, flexDirection: 'row' }}>
      <View style={{ borderColor: 'black', borderWidth: 1, flex: 1 }}>
      <Button onPress={() => dayList.scrollToIndex({animated: false, index: 0}) } title="Capodanno"></Button>
        <Button onPress={() => dayList.scrollToIndex({animated: false, index: 110}) } title="Festa liberazione"></Button>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList ref={(ref) => { dayList = ref }}
        initialNumToRender={365}
        initialScrollIndex={0}
        onScrollToIndexFailed={info => {
        }}
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
    </View>
  );
}
