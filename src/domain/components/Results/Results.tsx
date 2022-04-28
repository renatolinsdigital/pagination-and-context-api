import { useContext } from 'react';
import { UsersContext } from '../../context';
import { UsersPagination, UsersTable } from '..';
import { TitleStyled, BoxStyled, TextStyled } from './../../../shared/components';

function Results() {
  const {
    users,
    hasError,
    isLoading,
    errorMessage,
    lastQueryText,
    currentPage = 0,
    totalResults = 0,
  } = useContext(UsersContext) || {};

  const isUsersTableVisible = (users && users.length !== 0) || isLoading;

  return (
    <BoxStyled
      isVertical
      paddingTop={15}
      justifyContent='flex-start'
    >
      <TitleStyled
        as="h2"
        flex={0}
        fontSize={18}
        isInUpperCase={false}
        colorName='primaryLight'
      >
        Total results: {totalResults}
      </TitleStyled>
      {
        isUsersTableVisible
          ? <>
            <UsersTable
              users={users || []}
              hasError={hasError}
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
            {
              !hasError
              &&
              (
                <UsersPagination
                  currentPage={currentPage}
                  totalResults={totalResults}
                  lastQueryText={lastQueryText}
                />
              )
            }
          </>
          : (
            <TextStyled>No results
              {hasError && ' - check dev tools -> network to see if this is a github api call restriction'}
            </TextStyled>
          )
      }
    </BoxStyled>
  )
}

export default Results;
