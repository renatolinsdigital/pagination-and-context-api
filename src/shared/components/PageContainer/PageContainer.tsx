import BoxStyled from './../BoxStyled/BoxStyled';
import PageContainerProps from './PageContainer.model';

function PageContainer({ children }: PageContainerProps) {
  const MAX_PAGE_SIZE = 1080;

  return (
    <BoxStyled
      isVertical
      paddingTop={30}
      paddingLeft={15}
      paddingRight={15}
      paddingBottom={30}

      marginLeft="auto"
      marginRight="auto"
      maxWidth={MAX_PAGE_SIZE}
      backgroundColorName='transparent'
    >
      {children}
    </BoxStyled>
  )
}

export default PageContainer;
