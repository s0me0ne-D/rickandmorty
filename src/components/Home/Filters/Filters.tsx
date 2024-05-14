import React from 'react';
import { QueryParams } from '../../../interfaces/queryParams';
import { Search } from './Search';
import { Status } from './Status';

interface FiltersProps {
  queryParams: QueryParams;
  updateQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

export const Filters = ({ queryParams, updateQueryParams }: FiltersProps) => {
  return (
    <div className="w-full mt-5 flex justify-center gap-3">
      <Search updateQueryParams={updateQueryParams} />
      <Status
        currentStatus={queryParams.status}
        updateQueryParams={updateQueryParams}
      />
    </div>
  );
};
