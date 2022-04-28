import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { BoxProps, Colors, ReactInputEvent } from '../../../shared/models';

export type TextInputProps = Omit<BoxProps, 'theme'> & {
  id?: string;
  name?: string;
  flex?: number;
  value: string;
  maxLength?: number;
  textColor?: string;
  isReadOnly?: boolean;
  leftIcon?: ReactNode;
  placeHolder?: string;
  isDisabled?: boolean;
  rightIcon?: ReactNode;
  placeHolderColor?: string;
  hasShakeFeedback?: boolean;
  fontSize?: string | number;
  fontWeight?: string | number;
  placeHolderColorName?: keyof Colors;

  onENTERKeyPress?(): void;
  onKeyUp?(event?: ReactInputEvent): void;
  onChange?(event?: ReactInputEvent): void;
  onKeyDown?(event?: ReactInputEvent): void;
  onKeyPress?(event?: ReactInputEvent): void;
}

export interface CommonStyledProps {
  theme: DefaultTheme;
  flex?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  onBlur?(event?: ReactInputEvent): void;
  onFocus?(event?: ReactInputEvent): void;
}

export type TextInputContainerStyledProps = CommonStyledProps & {
  hasShakeFeedback?: boolean;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
}

export type TextInputStyledProps = CommonStyledProps & {
  isFocused?: boolean;
  colorName?: keyof Colors;
  fontSize: string | number;
  fontWeight: string | number;
  isLeftIconRendered?: boolean;
  paddingTop?: string | number;
  paddingLeft?: string | number;
  isRightIconRendered?: boolean;
  borderRadius?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  placeHolderColorName?: keyof Colors;
}