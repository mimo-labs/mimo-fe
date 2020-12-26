import theme, { Theme } from '@chakra-ui/theme';

// fonts
const fonts = {
  ...theme.fonts,
  body: "'Fira Code', monospace",
};

// theme
const customTheme: Theme = {
  ...theme,
  fonts,
};

export { customTheme as theme };
