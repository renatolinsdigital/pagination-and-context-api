import { BoxStyled, TextStyled, Link } from '../../../shared/components';

function AppFooter() {
  return (
    <BoxStyled paddingBottom={15} paddingTop={15} backgroundColorName='primaryDark'>
      <TextStyled paddingRight={2} colorName='white'>
        Developed by
      </TextStyled>
      <Link
        isTextBold
        colorName='white'
        isOpeningInNewTab
        hoverColorName='gray2'
        location='https://www.linkedin.com/in/renatolinsdigital'>
        Renato Lins
      </Link>
    </BoxStyled>
  )
}

export default AppFooter;
