import React from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //android specific
    //shadow for ios
    justifyContent: "center",
    alignItems: "center",
  },
});
