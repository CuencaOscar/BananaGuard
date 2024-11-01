import React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '../contexts/ThemeContext';

const HomeScreen: React.FC = () => {
  const {theme} = useTheme();

  return (
    <Container>
      <Title theme={theme}>Home</Title>
      <Content>
        <Description theme={theme}>
          Here, you'll be able to start diagnosing banana leaf diseases and
          explore the app features.
        </Description>
      </Content>
    </Container>
  );
};

// Styled components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const Content = styled.View`
  margin-top: 20px;
  padding: 0 20px;
`;

const Description = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
`;

export default HomeScreen;
