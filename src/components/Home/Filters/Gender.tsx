import React, { useState } from 'react';
import { QueryParams, IGender } from '../../../interfaces/queryParams';
import { ArrowDropDownIcon } from '../../../assets/icons/ArrowDropDownIcon';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface GenderProps {
  currentGender: IGender;
  updateQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

const genders: IGender[] = ['Female', 'Genderless', 'Male', 'unknown', ''];

export const Gender = ({ currentGender, updateQueryParams }: GenderProps) => {
  const [showStatuses, setShowStatuses] = useState<boolean>(false);

  const statusRef = useOutsideClick(() => setShowStatuses(false));

  const handleOnClick = (gender: IGender) => {
    updateQueryParams((prev) => ({
      ...prev,
      currentPageNumber: 1,
      gender,
    }));
    setShowStatuses(false);
  };

  return (
    <div ref={statusRef}>
      <div
        className={`options ${showStatuses && 'bg-gray-700 text-white border-grey-600'}`}
      >
        <span className="px-2">
          {currentGender === '' ? (
            <span className="opacity-70">Gender</span>
          ) : (
            currentGender
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
          {genders.map((gender) => (
            <button
              className="options-btn"
              onClick={() => handleOnClick(gender)}
              key={gender}
              type="button"
            >
              {gender === '' ? 'All' : gender}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
