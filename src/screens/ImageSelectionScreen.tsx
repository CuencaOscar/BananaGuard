import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Asset,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {StyleSheet} from 'react-native';
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
        <Subtitle>Check that the leaf fills most of the photo.</Subtitle>
        <PreviewCard>
          <Preview source={{uri: image.uri}} resizeMode="cover" />
        </PreviewCard>
        <InfoBox>
          <Icon name="info-circle" size={16} color={theme.colors.secondary} />
          <Note>
            Diagnosis needs the CNN model trained in the thesis, which is not
            bundled in this repository yet.
          </Note>
        </InfoBox>
        <PrimaryButton disabled style={styles.disabled}>
          <Icon name="search" size={16} color={theme.colors.primaryText} />
          <PrimaryText>Analyse leaf</PrimaryText>
        </PrimaryButton>
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

      <Option onPress={openCamera} accessibilityRole="button">
        <OptionIcon>
          <Icon name="camera" size={20} color={theme.colors.primary} />
        </OptionIcon>
        <OptionBody>
          <OptionTitle>Take a Photo</OptionTitle>
          <OptionText>Use the camera in good, natural light.</OptionText>
        </OptionBody>
        <Icon name="chevron-right" size={14} color={theme.colors.muted} />
      </Option>

      <Option onPress={openGallery} accessibilityRole="button">
        <OptionIcon>
          <Icon name="image" size={20} color={theme.colors.primary} />
        </OptionIcon>
        <OptionBody>
          <OptionTitle>Select from Gallery</OptionTitle>
          <OptionText>Pick a leaf photo you already have.</OptionText>
        </OptionBody>
        <Icon name="chevron-right" size={14} color={theme.colors.muted} />
      </Option>

      <Tips>
        <TipsTitle>Tips for a good photo</TipsTitle>
        <Tip>• One leaf per photo, upper side facing the camera</Tip>
        <Tip>• Avoid strong shadows and blurry images</Tip>
      </Tips>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 28px 20px 20px;
`;

const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.muted};
  margin: 6px 0 24px;
`;

const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.surface};
`;

const OptionIcon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  background-color: ${({theme}) => theme.colors.surfaceAlt};
`;

const OptionBody = styled.View`
  flex: 1;
`;

const OptionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const OptionText = styled.Text`
  font-size: 13px;
  margin-top: 2px;
  color: ${({theme}) => theme.colors.muted};
`;

const Tips = styled.View`
  margin-top: 12px;
  padding: 16px;
  border-radius: 20px;
  background-color: rgba(255, 213, 79, 0.08);
`;

const TipsTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
  color: ${({theme}) => theme.colors.secondary};
`;

const Tip = styled.Text`
  font-size: 13px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.muted};
`;

const PreviewCard = styled.View`
  padding: 8px;
  border-radius: 28px;
  background-color: ${({theme}) => theme.colors.surface};
`;

const Preview = styled.Image`
  width: 100%;
  aspect-ratio: 1.2;
  border-radius: 22px;
`;

const InfoBox = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin: 16px 0;
  padding: 14px;
  border-radius: 16px;
  background-color: rgba(255, 213, 79, 0.08);
`;

const Note = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 13px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.muted};
`;

const PrimaryButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.primary};
`;

const PrimaryText = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primaryText};
`;

const SecondaryButton = styled.TouchableOpacity`
  align-items: center;
  padding: 14px;
`;

const SecondaryText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
`;

const ErrorText = styled.Text`
  color: #ff8a80;
  font-size: 14px;
  margin-top: 12px;
`;

const styles = StyleSheet.create({
  disabled: {opacity: 0.45},
});

export default ImageSelectionScreen;
