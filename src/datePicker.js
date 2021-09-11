import React, { useState } from "react";
import { Text, View, Switch, TextInput, Button } from "react-native";
import { Platform, StyleSheet } from 'react-native';

export default function DatePicker( value, onChange ) {  
  if (Platform.OS === 'web') {
    return React.createElement('input', {
      type: 'date',
      value: value,
      min: '2021-01-01',
      max: '2021-12-31',
      onInput: onChange,
    })
  } else {
    return (<Text>Todo</Text>)
  }
}