import { AlignItems, BoxProps, JustifyContent } from '../../../shared/models';

type BoxStyledProps = BoxProps & {
  border?: string;
  isRemoved?: boolean;
  isVertical?: boolean;
  isStretched?: boolean;
  flex?: number | string;
  alignItems?: AlignItems;
  isFlexWrapping?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  verticalBreakPoint?: number;
  justifyContent?: JustifyContent;
};

export default BoxStyledProps;
