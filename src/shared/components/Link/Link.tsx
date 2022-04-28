import LinkProps from './Link.model';
import AnchorStyled from './../AnchorStyled/AnchorStyled';

function Link(
  {
    label,
    fontSize,
    location,
    children,
    colorName,
    paddingTop,
    isTextBold,
    paddingLeft,
    paddingRight,
    paddingBottom,
    hoverColorName,
    isOpeningInNewTab,
  }: LinkProps) {
  return (
    <AnchorStyled
      fontSize={fontSize}
      href={`${location}`}
      colorName={colorName}
      paddingTop={paddingTop}
      isTextBold={isTextBold}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      hoverColorName={hoverColorName}
      target={isOpeningInNewTab ? '_blank' : '_self'}
    >
      <>
        {label}
        {children}
      </>
    </AnchorStyled>
  );
}

export default Link;
