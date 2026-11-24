module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-vector-icons|react-native-image-picker)/)',
  ],
  moduleNameMapper: {
    '.(jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
