import styled, { CSSObject, CSSProperties } from 'styled-components';
import { shake } from '../../../shared/effects-and-animations';
import { TextInputContainerStyledProps, TextInputStyledProps } from './TextInput.model';

export const TextInputContainerStyled = styled.div<TextInputContainerStyledProps>((
  {
    flex,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    hasShakeFeedback,
  }
): CSSObject => {
  const shakeFeedback = hasShakeFeedback
    ? { ...(shake as CSSProperties) } : null;
  return {
    flex,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    width: '100%',
    display: 'flex',
    ...shakeFeedback,
    position: 'relative',

    'svg': {
      width: 18,
      height: 18
    },
  };
});

export const TextInputStyled = styled.input<TextInputStyledProps>((
  {
    flex,
    theme,
    fontSize,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    isFocused,
    fontWeight,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    borderRadius = 4,
    colorName = 'dark',
    isLeftIconRendered,
    isRightIconRendered,
    placeHolderColorName = 'gray2',
  }
): CSSObject => {
  const { colors, transitions } = theme;

  const parsedPaddingLeft =
    typeof paddingLeft === 'number'
      ? `${paddingLeft}px`
      : paddingLeft;

  const parsedPaddingRight =
    typeof paddingRight === 'number'
      ? `${paddingRight}px`
      : paddingRight;

  return {
    flex,
    fontSize,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    fontWeight,
    paddingTop,
    borderRadius,
    paddingBottom,
    display: 'flex',
    outline: 'none',
    color: colors[colorName],
    transition: transitions?.default,

    border: isFocused
      ? `1px solid ${colors.primaryDark}`
      : `1px solid ${colors.gray2}`,

    '&::-ms-input-placeholder': { /* Microsoft Edge */
      color: colors[placeHolderColorName],
    },

    '&:-ms-input-placeholder': { /* Internet Explorer 10-11 */
      color: colors[placeHolderColorName],
    },

    '&::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: colors[placeHolderColorName],
      opacity: 1 /* Firefox */
    },

    paddingLeft: isLeftIconRendered ? `calc(${parsedPaddingLeft} + 22px)` : paddingLeft,
    paddingRight: isRightIconRendered ? `calc(${parsedPaddingRight} + 20px)` : paddingRight,

  };
});





