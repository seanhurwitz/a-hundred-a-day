import styled from "styled-components/native";

const NameContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border: 1px solid red;
`;

const Greeting = styled.Text`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const NameInput = styled.TextInput`
  padding: 10px 20px;
  flex: 3;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TopContainer = styled.View``;

export { NameContainer, NameInput, Greeting, TopContainer };
