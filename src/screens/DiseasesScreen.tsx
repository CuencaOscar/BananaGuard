import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

const DiseasesScreen: React.FC = () => {
  return (
    <Container>
      <Title>Diseases</Title>
      <ScrollView></ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 15px;
`;

export default DiseasesScreen;
