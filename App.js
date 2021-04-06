import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { localStorageKeys } from "./config";
import { getBrachosPayload, getUsername } from "./functions";
import {
  CountContainer,
  Greeting,
  NameContainer,
  NameInput,
  Count,
} from "./styles";
import { Toggle } from "./components";
const App = () => {
  const [brachosPayload, setBrachosPayload] = useState();
  const [brachosCount, setBrachosCount] = useState(0);
  const [tempValue, setTempValue] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const setup = async () => {
      const initialPayload = await getBrachosPayload();
      const initialUsername = await getUsername();
      setBrachosPayload(initialPayload);
      setUsername(initialUsername);
    };
    setup();
  }, []);

  useEffect(() => {
    if (brachosPayload) {
      let total = 0;
      Object.values(brachosPayload.payload).map(({ count, value }) => {
        if (typeof value === "boolean") {
          total += value ? count : 0;
        } else {
          total += value * count;
        }
      });
      setBrachosCount(total);
    }
  }, [brachosPayload]);

  if (brachosPayload) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <NameContainer>
            <Greeting>{`Hello, `}</Greeting>
            <NameInput
              placeholder="Stranger!"
              value={
                username
                  ? username.includes("!")
                    ? username
                    : username + "!"
                  : ""
              }
              onChangeText={(v) => {
                AsyncStorage.setItem(localStorageKeys.username, v);
                setUsername(v);
              }}
            />
          </NameContainer>
          <CountContainer>
            <Count>{brachosCount}</Count>
          </CountContainer>
          {Object.keys(brachosPayload.payload).map((key) => {
            const {
              label: initialLabel,
              value,
              count,
            } = brachosPayload.payload[key];
            const label =
              count > 1
                ? `${initialLabel} (counts for ${count})`
                : initialLabel;
            if (typeof value === "boolean") {
              return (
                <Toggle
                  key={key}
                  label={label}
                  value={value}
                  onPress={() => {
                    setBrachosPayload((prev) => {
                      console.log(`prev.payload[key]`, prev.payload[key]);
                      prev.payload[key].value = !prev.payload[key].value;
                      console.log(`prev.payload[key]`, prev.payload[key]);
                      return JSON.parse(JSON.stringify(prev));
                    });
                  }}
                />
              );
            }
            return null;
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    padding: 20,
  },
  text: {
    fontSize: 24,
  },
});

export default App;
