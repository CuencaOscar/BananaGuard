import React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '../contexts/ThemeContext';
import {ImageSourcePropType} from 'react-native';
import bananeraImage from '../assets/background/bananera2.jpg';

type WelcomeScreenProps = {
  onAccess: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({onAccess}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Background
      source={bananeraImage as ImageSourcePropType}
      resizeMode="cover">
      <Overlay>
        <Title>Welcome to BananaGuard!</Title>
        <Description>
          Your companion for banana leaf disease detection.
        </Description>
        <AccessButton onPress={onAccess}>
          <ButtonText>Get Started</ButtonText>
        </AccessButton>
        {/* <ThemeToggleButton onPress={toggleTheme}>
            <ThemeToggleText>
              {theme.colors.background === '#FFF8E1'
                ? 'Switch to Dark Mode'
                : 'Switch to Light Mode'}
            </ThemeToggleText>
          </ThemeToggleButton> */}
      </Overlay>
    </Background>
  );
};

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const AccessButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 15px 30px;
  border-radius: 25px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
`;

const ThemeToggleButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 20px;
  opacity: 0.8;
`;

const ThemeToggleText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
`;

export default WelcomeScreen;
