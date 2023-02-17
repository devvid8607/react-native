import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
// import GoalInput from "./components/GoalInput";
// import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (goalEnteredText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalEnteredText, id: Math.random().toString() },
    ]);
    hideModal();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* input area */}
        <Button title="Add Goal" color="#5e0acc" onPress={showModal} />
        <GoalInput
          visible={isModalVisible}
          addGoalHandler={addGoalHandler}
          onCancel={hideModal}
        />

        {/* List area */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeletePress={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
    paddingTop: 24,
  },
});
