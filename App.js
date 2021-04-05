import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Button
        title="click me"
        onPress={() => {
          setCount(count + 1);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  counter: {
    fontSize: 180,
    color: "orange",
  },
});
