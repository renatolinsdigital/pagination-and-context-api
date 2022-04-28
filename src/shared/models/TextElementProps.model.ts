import { DefaultTheme } from "styled-components";
import BoxProps from "./BoxProps.model";

type TextElementProps = BoxProps & {
  isBold?: boolean;
  alignItems?: string;
  fontFamily?: string;
  theme?: DefaultTheme;
  isFlexible?: boolean;
  isStretched?: boolean;
  flex?: number | string;
  justifyContent?: string;
  isInUpperCase?: boolean;
  fontSize?: string | number;
  lineHeight?: string | number;
  fontWeight?: string | number;

  wordWrap?:
  'normal'
  | 'break-word'
  | 'initial'
  | 'inherit';

  textAlign?:
  'left'
  | 'end'
  | 'start'
  | 'right'
  | 'unset'
  | 'center'
  | 'justify'
  | 'inherit'
  | 'initial'
  | 'match-parent'
};

export default TextElementProps;
