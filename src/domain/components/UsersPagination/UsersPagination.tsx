import { UsersQuery } from '../../models';
import { ChangeEvent, useState } from 'react';
import { useGithubSearch } from '../../services';
import Pagination from '@mui/material/Pagination';
import { BoxStyled } from '../../../shared/components';
import UserPaginationProps from './UserPagination.model';

export default function UsersPagination({ totalResults = 0, currentPage = 0, lastQueryText = '' }: UserPaginationProps) {
  const [searchQuery, setSearchQuery] = useState<UsersQuery>({});

  useGithubSearch(searchQuery);
  const totalPages = Math.ceil(totalResults / 9);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setSearchQuery({
      queryText: lastQueryText,
      page: value
    });
  };

  return (
    <BoxStyled paddingTop={30} isVertical justifyContent='flex-start'>
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </BoxStyled>
  )
}
