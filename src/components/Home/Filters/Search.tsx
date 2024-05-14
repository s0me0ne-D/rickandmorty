import React, { useState } from 'react';
import { QueryParams } from '../../../interfaces/queryParams';

interface SearchProps {
  updateQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

export const Search = ({ updateQueryParams }: SearchProps) => {
  const [searchName, setSearchName] = useState<string>('');
  const onSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    updateQueryParams((prev) => ({
      ...prev,
      currentPageNumber: 1,
      name: searchName,
    }));
    setSearchName('');
    event.preventDefault();
  };

  return (
    <form onSubmit={(event) => onSubmit(event)} className="flex gap-1">
      <input
        className="py-1  px-2 bg-transparent border-solid border-2 border-gray-600"
        onChange={(event) => setSearchName(event.target.value)}
        placeholder="Search characters"
        type="text"
        value={searchName}
      />
      <button
        onClick={(event) => onSubmit(event)}
        type="submit"
        className="py-1 px-2 text-white bg-transparent border-solid border-2 border-gray-600   hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
};
