import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function GuessLogItem({ roundNumber, guessedNumber }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>#{roundNumber}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Opponent's Guess:{guessedNumber}</Text>
      </View>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.accent500,
    marginTop: 10,
    borderRadius: 100,
  },
  textContainer: {},
  text: {
    fontFamily: "open-sans",
    fontSize: 15,
  },
});
