import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const ResetText = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #565e6b;
  width: 100%;
  text-align: center;
`;

const Check = styled(Icon)`
  font-size: 30px;
  color: white;
`;

const Reset = ({ onPress }) => {
  return (
    <Container>
      <TouchableNativeFeedback onPress={onPress}>
        <ResetText>Reset</ResetText>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default Reset;
