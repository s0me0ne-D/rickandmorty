import React, { useState } from 'react';
import { QueryParams, IStatus } from '../../../interfaces/queryParams';
import { ArrowDropDownIcon } from '../../../assets/icons/ArrowDropDownIcon';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface StatusProps {
  currentStatus: IStatus;
  updateQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

const statuses: IStatus[] = ['Alive', 'Dead', 'unknown', ''];

export const Status = ({ currentStatus, updateQueryParams }: StatusProps) => {
  const [showStatuses, setShowStatuses] = useState<boolean>(false);

  const statusRef = useOutsideClick(() => setShowStatuses(false));

  const handleOnClick = (status: IStatus) => {
    updateQueryParams((prev) => ({
      ...prev,
      currentPageNumber: 1,
      status,
    }));
    setShowStatuses(false);
  };

  return (
    <div ref={statusRef}>
      <div
        className={`options ${showStatuses && 'bg-gray-700 text-white border-grey-600'}`}
      >
        <span className="px-2">
          {currentStatus === '' ? (
            <span className="opacity-70">Status</span>
          ) : (
            currentStatus
          )}
        </span>
        <button
          className="flex items-center"
          onClick={() => setShowStatuses((prev) => !prev)}
          aria-label="drop down"
          type="button"
        >
          <span className="opacity-70">|</span>
          <span className={`transition ${showStatuses && 'rotate-180'}`}>
            <ArrowDropDownIcon />
          </span>
        </button>
      </div>
      {showStatuses && (
        <div className="w-32 absolute flex flex-col bg-zinc-700">
          {statuses.map((status) => (
            <button
              className="options-btn"
              onClick={() => handleOnClick(status)}
              key={status}
              type="button"
            >
              {status === '' ? 'All' : status}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
