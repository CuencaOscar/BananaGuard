import React from 'react';
import styled from 'styled-components/native';

type WelcomeScreenProps = {
  onAccess: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({onAccess}) => {
  return (
    <Container>
      <Title>Welcome to BananaGuard!</Title>
      <Description>
        Your companion for banana leaf disease detection.
      </Description>
      <AccessButton onPress={onAccess}>
        <ButtonText>Access</ButtonText>
      </AccessButton>
    </Container>
  );
};

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

const Description = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 10px;
  text-align: center;
  padding: 0 20px;
`;

const AccessButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;

export default WelcomeScreen;
