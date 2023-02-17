import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ visible, addGoalHandler, onCancel }) {
  const [goalEnteredText, setGoalEnteredText] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalEnteredText(enteredText);
  };

  const onAddGoal = () => {
    addGoalHandler(goalEnteredText);
    setGoalEnteredText("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your Course Goal!"
          value={goalEnteredText}
        />
        <View style={styles.modalButtonContainer}>
          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={onCancel} color="#f31282"></Button>
          </View>
          <View style={styles.modalButtons}>
            <Button
              onPress={onAddGoal}
              title="Add Goal"
              color="#5e0acc"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4deff",
    width: "90%",
    marginRight: 10,
    padding: 8,
    color: "#120438",
    borderRadius: 6,
    padding: 16,
  },
  modalButtonContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  modalButtons: {
    width: 100,
    marginHorizontal: 20,
  },
  image: {
    width: 60,
    height: 60,
    margin: 20,
  },
});
