import React from 'react';
import renderer, {act, ReactTestRenderer} from 'react-test-renderer';
import {ThemeProvider} from '../src/contexts/ThemeContext';
import DiseasesScreen from '../src/screens/DiseasesScreen';
import HistoryScreen from '../src/screens/HistoryScreen';
import {diseases} from '../src/data/diseases';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
}));
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

const textOf = (tree: ReactTestRenderer) =>
  tree.root
    .findAll(node => typeof node.props.children === 'string')
    .map(node => node.props.children as string);

const renderWithTheme = (element: React.ReactElement) => {
  let tree!: ReactTestRenderer;
  act(() => {
    tree = renderer.create(<ThemeProvider>{element}</ThemeProvider>);
  });
  return tree;
};

describe('DiseasesScreen', () => {
  it('shows a card for every disease', () => {
    const texts = textOf(renderWithTheme(<DiseasesScreen />));
    for (const disease of diseases) {
      expect(texts).toContain(disease.name);
    }
  });
});

describe('HistoryScreen', () => {
  it('shows the empty state and links to image selection', () => {
    const tree = renderWithTheme(<HistoryScreen />);
    expect(textOf(tree)).toContain('No analyses yet');

    const button = tree.root.find(
      node => typeof node.props.onPress === 'function',
    );
    act(() => button.props.onPress());
    expect(mockNavigate).toHaveBeenCalledWith('ImageSelection');
  });
});
