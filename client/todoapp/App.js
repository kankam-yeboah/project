import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listedGoals, setListedGoals] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);

  function openGoalModalHandler() {
    setModalStatus(true);
  }

  function closeGoalModalHandler() {
    setModalStatus(false);
  }

  function addGoalHandler(enteredGoalText) {
    setListedGoals((prevGoals) => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    setModalStatus(false);
  }

  function deleteGoalhandler(id) {
    setListedGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/*The container holds the area for the users to input their information*/}
      <Button title="open modal" color={"#5e0acc"} onPress={openGoalModalHandler} />
      <GoalInput visible={modalStatus} addGoal={addGoalHandler} onCancel={closeGoalModalHandler} />
      {/*The container below holds the area to display the user input contents*/}
      <View style={styles.goalContainer}>
        <FlatList
          data={listedGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalhandler} />}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
