import { BoxStyled, TitleStyled } from '../../../shared/components';

function AppHeader() {
  return (
    <BoxStyled
      paddingTop={15}
      paddingLeft={20}
      paddingRight={20}
      paddingBottom={15}
      justifyContent="space-between"
      backgroundColorName='primaryDefault'
    >
      <TitleStyled colorName='white' fontSize={22}>
        Pagination App
      </TitleStyled>
    </BoxStyled>
  );
}

export default AppHeader;