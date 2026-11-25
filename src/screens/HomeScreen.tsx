import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../contexts/ThemeContext';
import {diseases} from '../data/diseases';
import leavesImage from '../assets/background/leaves.jpg';

type HomeScreenProps = {
  onClassifyImage: () => void;
  onViewDiseases: () => void;
  onViewHistory: () => void;
};

const STEPS = [
  {icon: 'camera', title: 'Capture', text: 'Take or pick a photo of the leaf.'},
  {
    icon: 'cogs',
    title: 'Analyse',
    text: 'A CNN classifies the leaf condition.',
  },
  {icon: 'medkit', title: 'Act', text: 'Follow the management advice.'},
];

const HomeScreen: React.FC<HomeScreenProps> = ({
  onClassifyImage,
  onViewDiseases,
  onViewHistory,
}) => {
  const {theme} = useTheme();

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Header>
          <BrandBadge>
            <Icon name="leaf" size={18} color={theme.colors.primaryText} />
          </BrandBadge>
          <View>
            <Brand>BananaGuard</Brand>
            <Tagline>Banana leaf health assistant</Tagline>
          </View>
        </Header>

        <Hero
          source={leavesImage as ImageSourcePropType}
          imageStyle={styles.heroImage}>
          <HeroShade>
            <HeroTitle>Detect Banana Leaf Diseases</HeroTitle>
            <HeroText>
              Get quick disease detection for banana leaves from a single photo.
            </HeroText>
            <HeroButton onPress={onClassifyImage} accessibilityRole="button">
              <Icon name="camera" size={16} color="#1a1300" />
              <HeroButtonText>Classify Image</HeroButtonText>
            </HeroButton>
          </HeroShade>
        </Hero>

        <Tiles>
          <Tile onPress={onViewDiseases} accessibilityRole="button">
            <TileIcon>
              <Icon name="list-alt" size={18} color={theme.colors.primary} />
            </TileIcon>
            <TileTitle>Disease List</TileTitle>
            <TileText>
              {diseases.length} diseases with symptoms and treatment
            </TileText>
          </Tile>
          <TileGap />
          <Tile onPress={onViewHistory} accessibilityRole="button">
            <TileIcon>
              <Icon name="history" size={18} color={theme.colors.primary} />
            </TileIcon>
            <TileTitle>View History</TileTitle>
            <TileText>Every analysis with its diagnosis and date</TileText>
          </Tile>
        </Tiles>

        <SectionTitle>How it works</SectionTitle>
        <Steps>
          {STEPS.map((step, index) => (
            <Step key={step.title} last={index === STEPS.length - 1}>
              <StepIcon>
                <Icon
                  name={step.icon}
                  size={16}
                  color={theme.colors.secondary}
                />
              </StepIcon>
              <View>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
              </View>
            </Step>
          ))}
        </Steps>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const View = styled.View`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px 0 20px;
`;

const BrandBadge = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: ${({theme}) => theme.colors.primary};
`;

const Brand = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const Tagline = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.muted};
`;

const Hero = styled.ImageBackground`
  border-radius: 24px;
  overflow: hidden;
`;

const HeroShade = styled.View`
  padding: 24px;
  padding-top: 72px;
  background-color: rgba(4, 16, 11, 0.55);
`;

const HeroTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

const HeroText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin: 6px 0 18px;
`;

const HeroButton = styled.TouchableOpacity`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 12px 18px;
  border-radius: 14px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const HeroButtonText = styled.Text`
  margin-left: 8px;
  font-size: 15px;
  font-weight: bold;
  color: #1a1300;
`;

const Tiles = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const TileGap = styled.View`
  width: 12px;
`;

const Tile = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.surface};
`;

const TileIcon = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  background-color: ${({theme}) => theme.colors.surfaceAlt};
`;

const TileTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const TileText = styled.Text`
  font-size: 12px;
  line-height: 17px;
  margin-top: 4px;
  color: ${({theme}) => theme.colors.muted};
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  color: ${({theme}) => theme.colors.text};
`;

const Steps = styled.View`
  padding: 6px 16px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.surface};
`;

const Step = styled.View<{last: boolean}>`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${({last}) => (last ? '0px' : '1px')};
  border-bottom-color: ${({theme}) => theme.colors.border};
`;

const StepIcon = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  background-color: rgba(255, 213, 79, 0.12);
`;

const StepTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const StepText = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.muted};
`;

const styles = StyleSheet.create({
  content: {padding: 20, paddingBottom: 32},
  heroImage: {borderRadius: 24},
});

export default HomeScreen;
