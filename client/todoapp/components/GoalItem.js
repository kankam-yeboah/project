import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: "#dddddd" }} onPress={props.onDelete.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 12,
  },
});
