import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import styled from "styled-components/native";

const Touch = styled.Text`
  font-size: 10;
`;

const CheckBox = ({ text }) => {
  return <Touch>{text}</Touch>;
};

export default CheckBox;
