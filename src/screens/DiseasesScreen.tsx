import React from 'react';
import styled from 'styled-components/native';
import {ScrollView, StyleSheet} from 'react-native';
import {Disease, DiseaseType, diseases} from '../data/diseases';

const typeColors: Record<DiseaseType, string> = {
  Fungal: '#34c48b',
  Bacterial: '#f59e0b',
  Viral: '#a78bfa',
};

const DiseaseCard: React.FC<{disease: Disease}> = ({disease}) => (
  <Card style={{borderLeftColor: typeColors[disease.type]}}>
    <CardHeader>
      <Name>{disease.name}</Name>
      <Badge style={{backgroundColor: `${typeColors[disease.type]}26`}}>
        <BadgeText style={{color: typeColors[disease.type]}}>
          {disease.type}
        </BadgeText>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}>
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
  padding: 28px 20px 0;
`;

const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.muted};
  margin: 6px 0 18px;
`;

const Card = styled.View`
  background-color: ${({theme}) => theme.colors.surface};
  border-width: 1px;
  border-left-width: 4px;
  border-color: ${({theme}) => theme.colors.border};
  border-radius: 18px;
  padding: 16px;
  margin-bottom: 12px;
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
  font-size: 12px;
  font-weight: bold;
`;

const Pathogen = styled.Text`
  font-style: italic;
  font-size: 13px;
  color: ${({theme}) => theme.colors.muted};
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

const styles = StyleSheet.create({
  list: {paddingBottom: 20},
});

export default DiseasesScreen;
