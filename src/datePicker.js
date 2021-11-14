import React, { useState } from "react";
import {
  View,
  Alert,
  Modal,
  Button,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default function DatePicker(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flexDirection: "row" }}>
      <Button title="Data" onPress={() => setModalVisible(true)}></Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Picker style={{width: 100}}
              selectedValue={props.month}
              onValueChange={(itemValue) => {
                props.onChangeMonth(itemValue);
              }}
            >
              <Picker.Item label="Settembre" value="9" />
              <Picker.Item label="Ottobre" value="10" />
              <Picker.Item label="Novembre" value="11" />
              <Picker.Item label="Dicembre" value="12" />
              <Picker.Item label="Gennaio" value="1" />
              <Picker.Item label="Febbraio" value="2" />
              <Picker.Item label="Marzo" value="3" />
              <Picker.Item label="Aprile" value="4" />
              <Picker.Item label="Maggio" value="5" />
              <Picker.Item label="Giugno" value="6" />
              <Picker.Item label="Luglio" value="7" />
              <Picker.Item label="Agosto" value="8" />
            </Picker>
            <Picker style={{width: 100}}
              selectedValue={props.day}
              onValueChange={(itemValue) => props.onChangeDay(itemValue)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" />
              <Picker.Item label="23" value="23" />
              <Picker.Item label="24" value="24" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="26" value="26" />
              <Picker.Item label="27" value="27" />
              <Picker.Item label="28" value="28" />
              <Picker.Item label="29" value="29" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="31" value="31" />
            </Picker>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
