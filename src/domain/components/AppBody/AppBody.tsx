import { Search, Results } from '../../components';
import { PageContainer } from '../../../shared/components';

function AppBody() {
  return (
    <PageContainer>
      <Search />
      <Results />
    </PageContainer>
  );
}

export default AppBody;