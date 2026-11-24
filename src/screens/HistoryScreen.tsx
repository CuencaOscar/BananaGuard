import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../contexts/ThemeContext';

const HistoryScreen: React.FC = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <Title>History</Title>
      <Empty>
        <Icon name="history" size={56} color={theme.colors.primary} />
        <EmptyTitle>No analyses yet</EmptyTitle>
        <EmptyText>
          Every leaf you classify will appear here with its diagnosis and date.
        </EmptyText>
        <Button onPress={() => navigation.navigate('ImageSelection' as never)}>
          <ButtonText>Classify an image</ButtonText>
        </Button>
      </Empty>
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
`;

const Empty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px 60px;
`;

const EmptyTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-top: 18px;
`;

const EmptyText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({theme}) => theme.colors.secondary};
  margin: 8px 0 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 20px;
  padding: 12px 28px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export default HistoryScreen;
