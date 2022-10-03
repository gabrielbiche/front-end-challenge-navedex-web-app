import { ThemeProvider } from 'styled-components';

import { styles } from 'theme';

const Theme = ({ theme = styles, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
