import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputChangeHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const { width, height } = useWindowDimensions();

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number must be between 1-99", [
        {
          text: "OK",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 300 ? 30 : 100;
  return (
    <>
      <StatusBar style="light" />
      <View style={[styles.mainContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            value={enteredNumber}
            onChangeText={numberInputChangeHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btnContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.btnContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}

export default StartGameScreen;

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: screenHeight < 400 ? 30 : 100,
    alignItems: "center",
  },
  inputContainer: {
    // flex: 1,
    padding: 16,

    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //android specific
    //shadow for ios
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnContainer: {
    flex: 1,
  },
});
