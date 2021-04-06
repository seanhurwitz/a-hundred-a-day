import React, { useState } from "react";
import { TextInput, View } from "react-native";
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
  width: 100%;
`;

const Label = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 60%;
`;

const ControlView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TouchView = styled.TextInput`
  border: 1px solid #333;
  background: rgba(255, 255, 255, 0.5);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  text-align: center;
`;

const Control = styled(Icon)`
  font-size: 40px;
  color: white;
`;

const CountInput = ({
  value,
  label,
  onChangeText,
  onIncrement,
  onDecrement,
}) => {
  const [text, setText] = useState(value);
  return (
    <Container value={value}>
      <Label>{label}</Label>
      <ControlView>
        <Control name="arrow-left" onPress={onDecrement} />
        <TouchView
          defaultValue={`${value || 0}`}
          placeholder="0"
          keyboardType="number-pad"
          onChangeText={(v) => setText(v)}
          onSubmitEditing={() => onChangeText(text)}
        />
        <Control name="arrow-right" onPress={onIncrement} />
      </ControlView>
    </Container>
  );
};

export default CountInput;
