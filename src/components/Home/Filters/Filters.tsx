import React from 'react';
import { QueryParams } from '../../../interfaces/queryParams';
import { Search } from './Search';
import { Status } from './Status';
import { Gender } from './Gender';

interface FiltersProps {
  queryParams: QueryParams;
  updateQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

const clearParams: QueryParams = {
  currentPageNumber: 1,
  name: '',
  status: '',
  gender: '',
};

export const Filters = ({ queryParams, updateQueryParams }: FiltersProps) => {
  const clearFilters = () => {
    updateQueryParams(clearParams);
  };

  return (
    <div className="w-full mt-5 flex flex-col justify-center items-center gap-3 sm:flex-row">
      <Search updateQueryParams={updateQueryParams} />
      <div className="flex gap-3">
        <Status
          currentStatus={queryParams.status}
          updateQueryParams={updateQueryParams}
        />
        <Gender
          currentGender={queryParams.gender}
          updateQueryParams={updateQueryParams}
        />
      </div>
      <button
        className="options-btn py-2"
        onClick={clearFilters}
        type="button"
        aria-label="clear button"
      >
        Clear filters
      </button>
    </div>
  );
};
