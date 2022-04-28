import styled, { CSSObject } from 'styled-components';

const AppContainerStyled = styled.div(({ theme }): CSSObject => {
  const { colors } = theme;

  return {
    width: '100%',
    height: '100%',
    display: 'grid',
    minHeight: '100vh',
    color: colors.dark,
    backgroundColor: colors.primaryLighter,
    gridAutoRows: 'min-content 1fr min-content',
  };
});

export default AppContainerStyled;