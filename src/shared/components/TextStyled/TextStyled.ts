import styled, { CSSObject } from 'styled-components';
import TextProps from './TextStyled.model';

const TextStyled = styled.span<TextProps>(
  ({
    theme,
    flex = 1,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    textAlign,
    isBold = false,
    lineHeight = 1.2,
    fontSize = '1rem',

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 8,
    paddingLeft = 12,
    paddingRight = 12,
    paddingBottom = 8,

    isFlexible = false,
    wordWrap = 'normal',
    isStretched = false,
    isInUpperCase = false,

    colorName = 'dark',
    backgroundColorName = 'transparent',
    hoverBackgroundColorName,

    cursor = 'default',
    overflowX = 'visible',
    overflowY = 'visible',
    alignItems = 'center',
    fontFamily = 'inherit',
    justifyContent = 'flex-start',
  }): CSSObject => {
    const { colors, transitions } = theme;

    return {
      cursor,
      fontSize,
      wordWrap,
      overflowX,
      overflowY,

      maxHeight,
      minHeight,
      alignItems,
      lineHeight,
      fontFamily,

      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      textAlign,
      justifyContent,
      borderRadius: 4,
      color: colors[colorName],
      transition: transitions?.default,
      flex: isStretched ? flex : 'none',

      width: isStretched ? '100%' : 'auto',
      height: isStretched ? '100%' : 'auto',
      maxWidth: maxWidth ? maxWidth : '100%',
      fontWeight: isBold ? 'bold' : 'normal',
      display: isFlexible ? 'flex' : 'inline',
      backgroundColor: colors[backgroundColorName],
      minWidth: isStretched ? 'max-content' : minWidth,
      textTransform: isInUpperCase ? 'uppercase' : 'none',

      '&:hover': {
        backgroundColor: hoverBackgroundColorName
          ? colors[hoverBackgroundColorName]
          : colors.transparent
      },
    }
  }

);


export default TextStyled;
