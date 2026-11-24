import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Asset,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useTheme} from '../contexts/ThemeContext';

const PICKER_OPTIONS = {mediaType: 'photo', quality: 0.8} as const;

const ImageSelectionScreen: React.FC = () => {
  const {theme} = useTheme();
  const [image, setImage] = useState<Asset | null>(null);
  const [error, setError] = useState('');

  const handleResult = (response: ImagePickerResponse) => {
    if (response.didCancel) {
      return;
    }
    if (response.errorCode) {
      setError(
        response.errorCode === 'camera_unavailable'
          ? 'No camera is available on this device.'
          : response.errorMessage || 'The image could not be loaded.',
      );
      return;
    }
    setError('');
    setImage(response.assets?.[0] ?? null);
  };

  const openCamera = () => launchCamera(PICKER_OPTIONS, handleResult);
  const openGallery = () => launchImageLibrary(PICKER_OPTIONS, handleResult);

  if (image?.uri) {
    return (
      <Container>
        <Title>Leaf to analyse</Title>
        <Preview source={{uri: image.uri}} resizeMode="cover" />
        <Note>
          Diagnosis needs the CNN model trained in the thesis, which is not
          bundled in this repository yet.
        </Note>
        <DisabledButton disabled>
          <ButtonText>Analyse leaf</ButtonText>
          <Icon name="search" size={20} color={theme.colors.text} />
        </DisabledButton>
        <SecondaryButton onPress={() => setImage(null)}>
          <SecondaryText>Choose another image</SecondaryText>
        </SecondaryButton>
      </Container>
    );
  }

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
      {error ? <ErrorText>{error}</ErrorText> : null}
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

const DisabledButton = styled(ActionButton)`
  opacity: 0.5;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;

const Preview = styled.Image`
  width: 80%;
  aspect-ratio: 1;
  border-radius: 16px;
  margin: 16px 0;
`;

const Note = styled.Text`
  width: 80%;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 6px;
`;

const SecondaryButton = styled.TouchableOpacity`
  padding: 10px;
`;

const SecondaryText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 15px;
  text-decoration-line: underline;
`;

const ErrorText = styled.Text`
  color: #ff8a80;
  font-size: 14px;
  margin-top: 12px;
`;

export default ImageSelectionScreen;
