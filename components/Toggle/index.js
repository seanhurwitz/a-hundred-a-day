import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ value }) => (value ? "#529370" : "#565e6b")};
  height: 60px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 60%;
`;

const TouchView = styled.View`
  border: 1px solid darkgray;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Check = styled(Icon)`
  font-size: 30px;
  color: white;
`;

const Toggle = ({ value, label, onPress }) => {
  return (
    <Container value={value}>
      <Label>{label}</Label>
      <TouchableNativeFeedback onPress={onPress}>
        <TouchView>{value && <Check name="done" />}</TouchView>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default Toggle;
