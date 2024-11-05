import React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageSelectionScreen: React.FC = () => {
  const {theme} = useTheme();

  const openCamera = () => {
    // Lógica para abrir la cámara
    console.log('Camera opened');
  };

  const openGallery = () => {
    // Lógica para abrir la galería
    console.log('Gallery opened');
  };

  return (
    <Container>
      <Title>Select an Image</Title>
      <Subtitle>Choose an option to start analyzing your banana leaf</Subtitle>

      <ButtonContainer>
        <ActionButton onPress={openCamera}>
          <ButtonText>Take a Photo</ButtonText>
          <Icon name="camera" size={20} color={theme.colors.text} />
        </ActionButton>

        <ActionButton onPress={openGallery}>
          <ButtonText>Select from Gallery</ButtonText>
          <Icon name="image" size={20} color={theme.colors.text} />
        </ActionButton>
      </ButtonContainer>
    </Container>
  );
};

// Styled components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 5px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const ActionButton = styled.TouchableOpacity`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 15px;
  border-radius: 12px;
  margin: 10px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  elevation: 5;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;

export default ImageSelectionScreen;
