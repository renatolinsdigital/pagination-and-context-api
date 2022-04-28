import styled, { CSSObject } from 'styled-components';
import BoxStyledProps from './BoxStyled.model';

const BoxStyled = styled.div<BoxStyledProps>(
  ({
    top,
    left,
    right,
    bottom,

    theme,
    flex = 1,
    maxWidth,
    maxHeight,
    transform,
    minWidth = 0,
    border = 'none',
    borderRadius = 0,
    minHeight = 'auto',

    paddingTop = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingBottom = 0,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    isRemoved = false,
    isVertical = false,
    isStretched = true,
    position = 'relative',
    overflowX = 'visible',
    overflowY = 'visible',

    verticalBreakPoint,
    alignItems = 'center',
    isFlexWrapping = false,
    justifyContent = 'center',
    backgroundColorName = 'transparent',
  }: BoxStyledProps): CSSObject => {
    const { colors } = theme;

    return {
      top,
      left,
      right,
      border,
      bottom,
      position,
      minWidth,
      transform,
      minHeight,
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      overflowX,
      overflowY,
      alignItems,
      borderRadius,
      justifyContent,

      maxWidth: maxWidth || '100%',
      maxHeight: maxHeight || 'auto',
      flex: isStretched ? flex : 'none',
      width: isStretched ? '100%' : 'auto',
      display: isRemoved ? 'none' : 'flex',
      height: isStretched ? '100%' : 'auto',
      flexDirection: isVertical ? 'column' : 'row',
      flexWrap: isFlexWrapping ? 'wrap' : 'nowrap',
      [`@media(max-width: ${verticalBreakPoint}px)`]: {
        flexDirection: 'column',
      },
      backgroundColor: colors[backgroundColorName]

    };
  },
);

export default BoxStyled;
