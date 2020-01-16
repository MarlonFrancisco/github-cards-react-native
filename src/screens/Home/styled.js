import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContentCard = styled.View`
  align-items: center;
`;

export const FieldCard = styled.View`
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const TextCard = styled.Text`
  font-size: 18px;
`;

export const GoHome = styled.TouchableOpacity`
    border-radius: 50px;
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 15px;
    padding: 5px;
    width: 60px;
    height: 60px;
    background: #2089dc;
`;
