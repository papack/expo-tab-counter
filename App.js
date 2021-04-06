import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="+"
        onPress={() => {
          setCount(count + 1);
        }}
      ></Button>
      <Text style={styles.counter}>{count}</Text>
      <Button style={styles.button} title="-"></Button>
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
