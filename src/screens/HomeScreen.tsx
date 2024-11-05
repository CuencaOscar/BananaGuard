import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../contexts/ThemeContext';

type HomeScreenProps = {
  onClassifyImage: () => void;
  onViewDiseases: () => void;
  onViewHistory: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({
  onClassifyImage,
  onViewDiseases,
  onViewHistory,
}) => {
  const { theme } = useTheme();

  return (
    <Container>
      <MainIcon name="leaf" size={60} />
      <HeaderText theme={theme}>Detect Banana Leaf Diseases</HeaderText>
      <IntroText theme={theme}>
        Get quick and accurate disease detection for banana leaves. Choose an
        action below to get started.
      </IntroText>

      <ActionContainer>
        <ActionButton onPress={onClassifyImage}>
          <ActionText theme={theme}>Classify Image</ActionText>
          <StyledIcon name="camera" size={20} color={theme.colors.text} />
        </ActionButton>

        <ActionButton onPress={onViewHistory}>
          <ActionText theme={theme}>View History</ActionText>
          <StyledIcon name="history" size={20} color={theme.colors.text} />
        </ActionButton>

        <ActionButton onPress={onViewDiseases}>
          <ActionText theme={theme}>Disease List</ActionText>
          <StyledIcon name="list-alt" size={20} color={theme.colors.text} />
        </ActionButton>
      </ActionContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

const MainIcon = styled(Icon)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  text-align: center;
`;

const IntroText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 30px;
  padding: 0 20px;
`;

const ActionContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px 25px;
  border-radius: 20px;
  width: 85%;
  margin: 10px 0;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  elevation: 4;
`;

const ActionText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;

const StyledIcon = styled(Icon)`
  margin-left: 10px;
`;

export default HomeScreen;