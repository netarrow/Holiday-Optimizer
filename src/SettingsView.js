import React, { useState } from "react";
import { Text, View, Switch, TextInput, Button, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import DatePicker from './datePicker'

const days = [
  { day: "Lunedì", id: 1 },
  { day: "Martedì", id: 2 },
  { day: "Mercoledì", id: 3 },
  { day: "Giovedì", id: 4 },
  { day: "Venerdì", id: 5 },
  { day: "Sabato", id: 6 },
  { day: "Domenica", id: 0 }
];

export default function SettingsView(props) {
  const [newHolidayName, setNewHolidayName] = useState('Nome festività')
  const [newHolidayMonth, setNewHolidayMonth] = useState('1')
  const [newHolidayDay, setNewHolidayDay] = useState('1')

  const toggleSwitch = async (id) => {
    let newArray = Array.from(props.weDays);
    const index = newArray.indexOf(id);
    if (index > -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(id);
    }
    props.setweDays(newArray);
    try {
      await AsyncStorage.setItem('@weDays', JSON.stringify(newArray))
      console.log(newArray)
      props.forceInit()
    } catch (e) {
      console.log(e)
    }
  };
  return (
     <View style={{ marginTop: 20, marginLeft: 20 }}>
      <Text style={{ marginBottom: 20 }}>
        Indica quali sono i giorni della settimana dove non lavori normalmente
      </Text>
      {days.map((item) => {
        return (
          <View key={item.id} 
                style={{
                marginBottom: 5,
                flexDirection: "row"
              }}>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <Text style={{alignSelf:"center"}}>{item.day}</Text>
            </View>
            <View style={{flex: 4}}>
              <Switch 
                style={{alignSelf:"flex-start"}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.weDays.includes(item.id) ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch(item.id)}
                value={props.weDays.includes(item.id)}
              />
            </View>
          </View>
        );
      })}
       <Text style={{ marginTop: 20 }}>
        Indica eventuali festività extra
      </Text>
      <View style={{ flexDirection: "row" }}>
        <DatePicker day={newHolidayDay} month={newHolidayMonth} onChangeDay={(event) => setNewHolidayDay(event)} onChangeMonth={(event) => setNewHolidayMonth(event)}></DatePicker>
      </View>
      <View style={{ flexDirection: "row", marginBottom: Platform.OS === "ios" ? 150 : 10 }}>
        <View style={{alignSelf:"center"}}><TextInput style={{backgroundColor:"white", width:150, height: 25}} editable onChangeText={(event) => setNewHolidayName(event)}></TextInput></View>
        <View style={{alignSelf:"center"}}><Button title="Aggiungi"></Button></View>
      </View>
        {props.extraHolidays.map((item) => {  
          return (
            <View key={item.id} style={{ flexDirection: "row", alignContent: 'flex-start' }}>
              <Text style={{marginRight: 50}}>{item.name}</Text>
              <Text>{item.date}</Text>
              <Button title="-" onPress={(event) => { 
                let btnId = item.id
                var removeIndex = props.extraHolidays.map(item => item.id).indexOf(btnId)
                props.extraHolidays.splice(removeIndex, 1)
                props.setExtraHolidays(props.extraHolidays)
                props.forceInit()
              }}></Button>
            </View>
          )
         })}
      </View>
  );
}
