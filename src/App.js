import { createGlobalStyle } from 'styled-components';

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
      <h1>Hello!</h1>
    </Theme>
  );
};

export default App;
