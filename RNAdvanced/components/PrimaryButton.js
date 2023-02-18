import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  const pressHandler = () => {
    console.log("pressed!");
  };
  return (
    <View style={styles.outerBtnContainer}>
      <Pressable
        style={styles.innerBtnContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerBtnContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerBtnContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});
