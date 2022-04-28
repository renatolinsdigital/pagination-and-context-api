import styled, { CSSObject } from 'styled-components';
import { ButtonStyledProps } from './Button.model';

const ButtonStyled = styled.button<ButtonStyledProps>((
  {
    top,
    left,
    right,
    bottom,

    theme,
    colorName,
    borderRadius = 4,
    backgroundColorName,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 12,
    paddingLeft = 24,
    paddingRight = 24,
    paddingBottom = 12,
    position = 'static',
    hoverColorName = 'white',
    hoverBackgroundColorName = 'primaryDark',
  }): CSSObject => {
  const { colors, transitions } = theme;

  return {
    top,
    left,
    right,
    bottom,
    position,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom,

    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,

    borderRadius,
    transition: transitions?.default,
    color: colorName ? colors[colorName] : colors.white,

    backgroundColor: backgroundColorName
      ? colors[backgroundColorName]
      : colors.primaryDefault,

    '&:hover': {
      color: colors[hoverColorName],
      backgroundColor: colors[hoverBackgroundColorName]
    },
  }

});

export default ButtonStyled;