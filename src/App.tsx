import { theme } from './theme/theme'
import { UsersProvider } from './domain/context';
import globalStyles from './global-styles/index.scss';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppContainerStyled, AppHeader, AppBody, AppFooter } from './domain/components';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <AppContainerStyled >
            <AppHeader />
            <AppBody />
            <AppFooter />
          </AppContainerStyled>
        </UsersProvider>
      </ThemeProvider>
    </>

  );
}

export default App;
