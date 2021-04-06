import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { CheckBox } from "./components";
import { initialSetup } from "./functions";
const App = () => {
  const [brachosPayload, setBrachosPayload] = useState();
  useEffect(async () => {
    const initialPayload = await initialSetup();
    setBrachosPayload(initialPayload);
  }, []);
  console.log(`brachosPayload`, brachosPayload);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <CheckBox text="Hello" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    padding: 20,
  },
  text: {
    fontSize: 24,
  },
});

export default App;
