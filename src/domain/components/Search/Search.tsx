
import { useState } from 'react';
import { UsersQuery } from '../../models';
import { useGithubSearch } from '../../services';
import { SearchIcon } from './../../../shared/icons';
import { ReactInputEvent } from '../../../shared/models';
import { TextInput, BoxStyled, Button } from '../../../shared/components';

function Search() {
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState<UsersQuery>({});
  const [hasInputError, setHasInputError] = useState(false);
  useGithubSearch(searchQuery);

  const handleInputChange = (event: ReactInputEvent) => {
    setHasInputError(false);
    setInputText(event.target.value)
  }

  const handleSearchMouseDown = () => {
    setHasInputError(false);
  }

  const handleSearch = () => {
    if (!inputText) {
      setHasInputError(true);
      return;
    }
    setSearchQuery({
      queryText: inputText,
      page: 1
    });
  }

  return (
    <BoxStyled justifyContent='flex-start' flex={0}>
      <TextInput
        maxWidth={400}
        value={inputText}
        leftIcon={<SearchIcon />}
        onChange={handleInputChange}
        placeHolder='Type login here'
        onENTERKeyPress={handleSearch}
        hasShakeFeedback={hasInputError}
      />
      <Button
        marginLeft={15}
        onClick={handleSearch}
        onMouseDown={handleSearchMouseDown}
        backgroundColorName='secondaryDefault'
        hoverBackgroundColorName='secondaryDark'
      >
        Search
      </Button>
    </BoxStyled>
  );
}

export default Search;


