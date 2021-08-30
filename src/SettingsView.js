import * as React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";


let isEnabled = false

export default function SettingsView() {
  return (
    <View style={{marginLeft: '50px', marginTop: '50px', flex: 1, justifyContent: "start", alignItems: "top" }}>
      <Text>Selezioni i giorni non lavorativi della settimana</Text>
          <View style={{width: '100px', display: 'flex', alignItems: "top", justifyContent: "start",  flexDirection: "row"}}>
            <Text style={{flex: 1}}>Lunedì</Text>
            <Switch
                style={{flex: 1}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
              />
          </View>
    </View>
  );
}
