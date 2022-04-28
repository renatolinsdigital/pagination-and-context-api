import styled, { CSSObject } from 'styled-components';
import TitleProps from './TitleStyled.model';

const TitleStyled = styled.h1<TitleProps>(
  ({
    theme,
    flex = 'auto',
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    textAlign,
    isBold = true,

    lineHeight = 1.5,
    fontSize = '2rem',

    marginTop = 10,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 10,

    paddingTop = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingBottom = 0,

    colorName = 'dark',
    isFlexible = false,
    isStretched = true,
    isInUpperCase = true,

    overflowX = 'visible',
    overflowY = 'visible',
    alignItems = 'center',
    fontFamily = 'inherit',
    justifyContent = 'center',
  }): CSSObject => {
    const { colors } = theme;

    return {
      fontSize,
      overflowX,
      overflowY,
      alignItems,
      fontFamily,
      lineHeight,

      maxHeight,
      minHeight,
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
      textWrap: 'nowrap',
      color: colors[colorName],

      flex: isStretched ? flex : 'none',
      width: isStretched ? '100%' : 'auto',
      maxWidth: maxWidth ? maxWidth : '100%',
      display: isFlexible ? 'flex' : 'inline',

      fontWeight: isBold ? 'bold' : 'normal',
      minWidth: isStretched ? 'max-content' : minWidth,
      textTransform: isInUpperCase ? 'uppercase' : 'none',
    };
  },
);

export default TitleStyled;
