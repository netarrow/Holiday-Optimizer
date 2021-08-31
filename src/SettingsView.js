import React, { useState } from "react";
import { Text, View, Switch } from "react-native";

export default function SettingsView() {
  const [weDays, setweDays] = useState([]);
  const toggleSwitch = (id) => { 
    let newArray = Array.from(weDays)
    newArray.push(id);
    setweDays(newArray)
  }

  const days = [
    { day: "Domenica", id : 0 },
    { day: "Lunedì", id: 1 },
    { day: "Martedì", id: 2 },
    {day: "Mercoledì", id: 3 },
    {day: "Giovedì", id: 4 },
    {day: "Venerdì", id: 5 },
    {day: "Sabato", id: 6 },
  ];

  return (
    <View>
      <Text style={{marginBottom: 20}}>Indica quali sono i giorni della settimana dove non lavori normalmente</Text>
      {days.map((item) => {
        return (
          <View
            key={item.day}
            style={{
              alignItems: "top",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: "center",
                justifyContent: "flex-evenly",
              }}
            >
              <Text>{item.day}</Text>
            </View>
            <View
              style={{
                flex: 4,
                alignSelf: "center",
                justifyContent: "space-evenly",
                paddingBottom: 5,
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={weDays.includes(item.id) ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch(item.id)}
                value={weDays.includes(item.id)}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
