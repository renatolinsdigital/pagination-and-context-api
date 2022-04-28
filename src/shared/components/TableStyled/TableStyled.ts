import styled, { CSSObject, StyledComponent } from 'styled-components';
import {
  TableProps,
  TableRowProps,
  TableBodyProps,
  TableCellProps,
  TableFooterGroupProps,
  TableHeaderGroupProps,
} from './Table.model';

type Row = StyledComponent<'tr', {}, TableRowProps>;
type Cell = StyledComponent<'td', {}, TableCellProps>;
type Body = StyledComponent<'tbody', {}, TableBodyProps>;
type HeaderCell = StyledComponent<'th', {}, TableCellProps>;
type FooterGroup = StyledComponent<'tfoot', {}, TableFooterGroupProps>;
type HeaderGroup = StyledComponent<'thead', {}, TableHeaderGroupProps>;

type TableContainerStyled = StyledComponent<'table', {}, TableProps> & {
  Row: Row;
  Body: Body;
  Cell: Cell;
  HeaderCell: HeaderCell;
  FooterGroup: FooterGroup;
  HeaderGroup: HeaderGroup;
};

const TableStyled = styled.table<TableProps>(
  ({
    theme,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    borderSpacing,

    fontSize = 16,
    borderSize = '1px',
    textColorName = 'dark',
    borderCollapse = 'collapse',
    borderColorName = 'transparent',
  }): CSSObject => {
    const { colors } = theme;
    return {
      fontSize,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,

      overflowX,
      overflowY,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
      borderSpacing,
      borderCollapse,
      color: colors[textColorName],
      border: `${borderSize} solid ${colors[borderColorName]}`,
    };
  },
) as TableContainerStyled;

TableStyled.Row = styled.tr<TableRowProps>(
  ({
    theme,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,
    fontSize = 16,
    textColorName = 'dark',
    backgroundColorName = 'transparent',
    hoverBackgroundColorName = 'transparent'
  }): CSSObject => {
    const { colors } = theme;
    return {
      fontSize,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      overflowX,
      overflowY,
      color: colors[textColorName],
      backgroundColor: colors[backgroundColorName],

      '&:hover': {
        backgroundColor: colors[hoverBackgroundColorName]
      }
    };
  },
) as Row;

TableStyled.HeaderCell = styled.th<TableCellProps>(
  ({
    theme,
    width,
    height,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,

    fontSize = 18,
    paddingTop = 15,
    paddingLeft = 20,
    paddingRight = 20,
    paddingBottom = 15,

    borderSize = 1,
    textAlign = 'center',
    verticalAlign = 'middle',
    textColorName = 'inherit',
    borderColorName = 'transparent',
    backgroundColorName = 'primaryDefault',
    hoverBackgroundColorName = 'primaryDefault'

  }): CSSObject => {
    const { colors } = theme;
    return {
      width,
      height,
      fontSize,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      overflowX,
      overflowY,
      textAlign,
      paddingTop,
      paddingLeft,
      paddingRight,
      verticalAlign,
      paddingBottom,
      color: colors[textColorName],
      backgroundColor: colors[backgroundColorName],
      border: `${borderSize} solid ${colors[borderColorName]}`,

      '&:hover': {
        backgroundColor: colors[hoverBackgroundColorName]
      }
    };
  },
) as HeaderCell;

TableStyled.Cell = styled.td<TableCellProps>(
  ({
    theme,
    width,
    height,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,

    paddingTop = 10,
    paddingLeft = 20,
    paddingRight = 20,
    paddingBottom = 10,

    fontSize = 16,
    borderSize = '1px',
    textAlign = 'center',
    verticalAlign = 'middle',
    textColorName = 'inherit',
    borderColorName = 'transparent',
    backgroundColorName = 'transparent',
    hoverBackgroundColorName = 'transparent'
  }): CSSObject => {
    const { colors } = theme;
    return {
      width,
      height,
      maxWidth,
      minWidth,
      fontSize,
      maxHeight,
      minHeight,
      overflowX,
      overflowY,
      textAlign,
      paddingTop,
      paddingLeft,
      paddingRight,
      verticalAlign,
      paddingBottom,
      color: colors[textColorName],
      backgroundColor: colors[backgroundColorName],
      border: `${borderSize} solid ${colors[borderColorName]}`,

      '&:hover': {
        backgroundColor: colors[hoverBackgroundColorName]
      }
    };
  },
) as Cell;

TableStyled.HeaderGroup = styled.thead<TableHeaderGroupProps>(
  ({
    theme,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,
    textColorName = 'white'
  }): CSSObject => {
    const { colors } = theme;
    return {
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      overflowX,
      overflowY,
      color: colors[textColorName],
    };
  },
) as HeaderGroup;

TableStyled.Body = styled.tbody<TableBodyProps>(
  ({
    theme,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,
    fontSize = 16,
    textColorName = 'dark',
  }): CSSObject => {
    const { colors } = theme;
    return {
      fontSize,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      overflowX,
      overflowY,
      color: colors[textColorName],
    };
  },
) as Body;

TableStyled.FooterGroup = styled.tfoot<TableFooterGroupProps>(
  ({
    theme,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    overflowX,
    overflowY,
    textColorName = 'dark'
  }): CSSObject => {
    const { colors } = theme;
    return {
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      overflowX,
      overflowY,
      color: colors[textColorName],
    };
  },
) as FooterGroup;

export default TableStyled;
