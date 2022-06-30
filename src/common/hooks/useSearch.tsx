import { useState } from 'react';
import debounce from 'lodash.debounce';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeWithDebounce = debounce((value: string) => {
    setSearchValue(value);
  }, 300);

  return {
    searchValue,
    setSearchValue: handleChangeWithDebounce,
  };
};
