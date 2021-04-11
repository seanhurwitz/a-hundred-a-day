import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import AnimatedNumbers from "react-native-animated-numbers";
import { CountInput, Reset, Toggle } from "./components";
import { localStorageKeys } from "./config";
import { formatDate, getBrachosPayload, getCountColor } from "./functions";
import {
  CountContainer,
  DateStyles,
  Heading,
  SecondHeading,
  TopContainer,
} from "./styles";

const App = () => {
  const [brachosPayload, setBrachosPayload] = useState();
  const [brachosCount, setBrachosCount] = useState(0);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      const currentTimestamp = formatDate(new Date());
      if (brachosPayload && currentTimestamp !== brachosPayload.date) {
        setup();
      }
    }
    appState.current = nextAppState;
  };

  const setup = async () => {
    const initialPayload = await getBrachosPayload();
    setBrachosPayload(initialPayload);
  };

  //Initial Setup
  useEffect(() => {
    setup();
  }, []);

  // Sum the Brachos
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
      AsyncStorage.setItem(
        localStorageKeys.brachosState,
        JSON.stringify(brachosPayload)
      );
    }
  }, [brachosPayload]);

  if (brachosPayload) {
    return (
      <SafeAreaView style={styles.container}>
        <TopContainer>
          <DateStyles>
            {brachosPayload.date} ({brachosPayload.hebDay})
          </DateStyles>
          <CountContainer>
            <AnimatedNumbers
              includeComma
              animateToNumber={brachosCount}
              fontStyle={{
                fontSize: 120,
                fontWeight: "bold",
                color: getCountColor(brachosCount),
              }}
            />
            <Heading>Brachos Today</Heading>
            {brachosCount >= 100 && <SecondHeading>You Did It!</SecondHeading>}
          </CountContainer>
        </TopContainer>
        <ScrollView style={styles.scrollView}>
          {Object.keys(brachosPayload.payload).map((key) => {
            const {
              label: initialLabel,
              value,
              count,
            } = brachosPayload.payload[key];
            const label =
              count > 1 ? `${initialLabel} (${count})` : initialLabel;
            if (typeof value === "boolean") {
              return (
                <Toggle
                  key={key}
                  label={label}
                  value={value}
                  onPress={() => {
                    setBrachosPayload((prev) => {
                      prev.payload[key].value = !prev.payload[key].value;
                      return JSON.parse(JSON.stringify(prev));
                    });
                  }}
                />
              );
            }
            return (
              <CountInput
                key={key}
                label={label}
                value={value}
                onChangeText={(v) => {
                  setBrachosPayload((prev) => {
                    prev.payload[key].value = parseInt(v);
                    return JSON.parse(JSON.stringify(prev));
                  });
                }}
                onIncrement={() => {
                  setBrachosPayload((prev) => {
                    prev.payload[key].value++;
                    return JSON.parse(JSON.stringify(prev));
                  });
                }}
                onDecrement={() => {
                  setBrachosPayload((prev) => {
                    prev.payload[key].value > 0 && prev.payload[key].value--;
                    return JSON.parse(JSON.stringify(prev));
                  });
                }}
              />
            );
          })}
          <Reset
            onPress={async () => {
              await AsyncStorage.removeItem(localStorageKeys.brachosState);
              const initialState = await getBrachosPayload();
              setBrachosPayload(initialState);
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: "100%",
  },
  scrollView: { paddingHorizontal: 20 },
  text: {
    fontSize: 24,
  },
});

export default App;
