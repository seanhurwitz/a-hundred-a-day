import styled from "styled-components/native";

const CountContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const Count = styled.Text`
  text-align: center;
  font-size: 140px;
  font-weight: bold;
`;

const Heading = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #333;
`;

const SecondHeading = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export { Count, CountContainer, Heading, SecondHeading };
