import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImage from '../assets/background/leaves.jpg';
import {useTheme} from '../contexts/ThemeContext';

type WelcomeScreenProps = {
  onAccess: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({onAccess}) => {
  const {theme} = useTheme();

  return (
    <Background
      source={backgroundImage as ImageSourcePropType}
      resizeMode="cover">
      <Overlay>
        <Top>
          <LogoBadge>
            <Icon name="leaf" size={34} color={theme.colors.primaryText} />
          </LogoBadge>
        </Top>
        <Sheet>
          <Eyebrow>MSc in Artificial Intelligence · VIU</Eyebrow>
          <Title>Welcome to BananaGuard!</Title>
          <Description>
            Your companion for banana leaf disease detection: snap a leaf, check
            the reference guide and keep track of every analysis.
          </Description>
          <AccessButton onPress={onAccess} accessibilityRole="button">
            <ButtonText>Get Started</ButtonText>
            <Icon
              name="arrow-right"
              size={16}
              color={theme.colors.primaryText}
            />
          </AccessButton>
        </Sheet>
      </Overlay>
    </Background>
  );
};

const Background = styled.ImageBackground`
  flex: 1;
`;

const Overlay = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: rgba(4, 14, 10, 0.45);
`;

const Top = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LogoBadge = styled.View`
  width: 84px;
  height: 84px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
  elevation: 10;
`;

const Sheet = styled.View`
  padding: 32px 28px 40px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: ${({theme}) => theme.colors.background};
`;

const Eyebrow = styled.Text`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 10px;
`;

const Description = styled.Text`
  font-size: 15px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.muted};
  margin-bottom: 28px;
`;

const AccessButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px;
  border-radius: 16px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.primaryText};
  font-size: 17px;
  font-weight: bold;
  margin-right: 10px;
`;

export default WelcomeScreen;
