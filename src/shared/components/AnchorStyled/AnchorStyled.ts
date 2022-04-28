import styled, { CSSObject } from 'styled-components';
import AnchorProps from './AnchorStyled.model';

const AnchorStyled = styled.a<AnchorProps>((
  {
    theme,
    isTextBold,
    paddingTop = 2,
    paddingLeft = 4,
    paddingRight = 4,
    paddingBottom = 2,
    colorName = 'dark',
    fontSize = 'inherit',
    hoverColorName = 'primaryDark',
  }
): CSSObject => {
  const { colors, transitions } = theme;


  return {
    fontSize,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    lineHeight: 1.5,
    cursor: 'pointer',
    color: colors[colorName],
    transition: transitions?.default,
    fontWeight: isTextBold ? 'bold' : 'normal',
    '&:hover': {
      color: colors[hoverColorName]
    },
  };
});

export default AnchorStyled;
