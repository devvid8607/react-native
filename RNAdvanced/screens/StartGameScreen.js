import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, //android specific
    //shadow for ios
    justifyContent: "center",
    alignItems: "center",
    color: "#",
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnContainer: {
    flex: 1,
  },
});
