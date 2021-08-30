import React, { useState } from "react";
import { Text, View, Switch } from "react-native";


let isEnabled = false

export default function SettingsView() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{display: 'flex', alignItems: "top", justifyContent: "start",  flexDirection: "row"}}>
      <Text>Lunedì</Text>
      <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  );
}
