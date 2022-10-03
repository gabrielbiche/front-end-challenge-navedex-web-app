import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import UnauthenticatedApp from 'UnauthenticatedApp';

import { Theme } from 'theme';

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
  }
  button, a, li {
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Router>{<UnauthenticatedApp />}</Router>
    </Theme>
  );
};

export default App;
