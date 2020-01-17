import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const AvatarImage = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const CalloutView = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const SearchForm = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  flex: 1;
  height: 50px;
  background-color: #fff;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
`;

export const SearchButton = styled(RectButton)`
  height: 50px;
  width: 50px;
  background-color: #8d4dff;
  border-radius: 25px;
  margin-left: 15px;
  align-items: center;
  justify-content: center;
`;
