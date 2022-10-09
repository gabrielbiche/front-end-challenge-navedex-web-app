import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Theme } from 'theme';
import AuthenticatedApp from 'AuthenticatedApp';
import UnauthenticatedApp from 'UnauthenticatedApp';
import { useUser } from 'context/userContext';

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
  const { user } = useUser();

  return (
    <Theme>
      <GlobalStyle />
      <Router>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Router>
    </Theme>
  );
};

export default App;
