import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})``;

export const ItemContainer = styled.TouchableOpacity`
  padding: 20px;
  margin: 20px;
  background-color: #f57d27;
  border-radius: 4px;
  width: 80%;
  align-items: center;
`;

export const ItemText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
