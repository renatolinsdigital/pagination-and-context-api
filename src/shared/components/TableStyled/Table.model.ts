import { Colors } from './../../models';
import { DefaultTheme } from 'styled-components';

interface GenericProps {
  theme: DefaultTheme;
  borderSize?: string;
  fontSize?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  textColorName?: keyof Colors;
  borderColorName?: keyof Colors;
  backgroundColorName?: keyof Colors;
  hoverBackgroundColorName?: keyof Colors;
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';
}

export type TableProps = GenericProps & {
  id?: string;
  marginTop?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  borderSpacing?: number | string;
  borderCollapse?: 'collapse' | 'separate';
};

export type TableRowProps = GenericProps;
export type TableBodyProps = GenericProps;

export type TableCellProps = GenericProps & {
  colSpan?: number;
  width?: number | string;
  height?: number | string;
  paddingTop?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  verticalAlign?: 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom' | string;
};

export type TableHeaderGroupProps = GenericProps;
export type TableFooterGroupProps = GenericProps;
