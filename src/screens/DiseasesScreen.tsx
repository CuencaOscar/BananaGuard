import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {Disease, DiseaseType, diseases} from '../data/diseases';

const typeColors: Record<DiseaseType, string> = {
  Fungal: '#269b86',
  Bacterial: '#d9822b',
  Viral: '#8e6bd8',
};

const DiseaseCard: React.FC<{disease: Disease}> = ({disease}) => (
  <Card>
    <CardHeader>
      <Name>{disease.name}</Name>
      <Badge style={{backgroundColor: typeColors[disease.type]}}>
        <BadgeText>{disease.type}</BadgeText>
      </Badge>
    </CardHeader>
    <Pathogen>{disease.pathogen}</Pathogen>
    <Label>Symptoms</Label>
    <Body>{disease.symptoms}</Body>
    <Label>Management</Label>
    <Body>{disease.management}</Body>
  </Card>
);

const DiseasesScreen: React.FC = () => {
  return (
    <Container>
      <Title>Diseases</Title>
      <Subtitle>
        Common diseases of banana plants and how to recognise them.
      </Subtitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        {diseases.map(disease => (
          <DiseaseCard key={disease.name} disease={disease} />
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 20px 20px 0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.secondary};
  margin: 6px 0 16px;
`;

const Card = styled.View`
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.Text`
  flex: 1;
  font-size: 17px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-right: 10px;
`;

const Badge = styled.View`
  border-radius: 10px;
  padding: 3px 10px;
`;

const BadgeText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`;

const Pathogen = styled.Text`
  font-style: italic;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 4px 0 10px;
`;

const Label = styled.Text`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.secondary};
  margin-top: 6px;
`;

const Body = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 2px;
`;

export default DiseasesScreen;
