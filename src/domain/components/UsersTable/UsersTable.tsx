import UsersTableProps from './UserTable.model';
import { BoxStyled, Spinner, Image, TextStyled, TableStyled as Table } from './../../../shared/components';

function UsersTable({ isLoading, users, hasError, errorMessage }: UsersTableProps) {
  return (
    <BoxStyled
      isVertical
      alignItems='center'
      justifyContent='flex-start'
    >
      {isLoading && !hasError && <Spinner />}
      {!isLoading && !hasError &&
        (
          <Table>
            <Table.HeaderGroup>
              <Table.Row textColorName='white'>
                <Table.HeaderCell>
                  <TextStyled isBold colorName='inherit'>Avatar</TextStyled>
                </Table.HeaderCell>
                <Table.HeaderCell >
                  <TextStyled isBold colorName='inherit' minWidth={200}>Login</TextStyled>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <TextStyled isBold colorName='inherit'>Type</TextStyled>
                </Table.HeaderCell>
              </Table.Row>
            </Table.HeaderGroup>
            <Table.Body>
              {
                users?.map((user, index) => {
                  return (
                    <Table.Row
                      key={`index-${index}-for-${user.id}`}
                      hoverBackgroundColorName='primaryLight'
                      backgroundColorName={index % 2 === 0 ? 'gray1' : 'transparent'}
                    >
                      <Table.Cell>
                        <Image
                          width={60}
                          borderRadius="50%"
                          sourceUrl={user.avatar_url}
                          alt={`Avatar of ${user.login}`}
                        />
                      </Table.Cell>
                      <Table.Cell width={350}>
                        <BoxStyled>
                          <TextStyled>{user.login}</TextStyled>
                        </BoxStyled>
                      </Table.Cell>
                      <Table.Cell width={120}>
                        <BoxStyled>
                          <TextStyled >{user.type}</TextStyled>
                        </BoxStyled>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              }
            </Table.Body>
          </Table>
        )
      }
      {hasError && <TextStyled>{errorMessage}</TextStyled>}
    </BoxStyled>
  )
};

export default UsersTable;
