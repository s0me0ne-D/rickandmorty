import React, { useEffect, useState } from 'react';
import { BackIcon } from '../../../assets/icons/BackIcon';
import { ForwardIcon } from '../../../assets/icons/ForwardIcon';

interface PaginationProps {
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({
  currentPageNumber,
  setCurrentPageNumber,
  totalPages,
}: PaginationProps) => {
  const [pageNumbersLength, setPageNumbersLength] = useState<number[]>([]);
  useEffect(() => {
    const newPageNumberLength = [];
    for (let i = 1; i < totalPages; i += 1) {
      newPageNumberLength.push(i);
    }
    setPageNumbersLength(newPageNumberLength);
  }, []);

  const backOnClick = () =>
    currentPageNumber > 1 && setCurrentPageNumber((prev) => prev - 1);
  const forwardOnClick = () =>
    currentPageNumber < totalPages && setCurrentPageNumber((prev) => prev + 1);

  const arrowBackStyle = currentPageNumber === 1 && 'opacity-40';
  const arrowForwardStyle = currentPageNumber === totalPages && 'opacity-40';

  return (
    <div className="w-full mt-4 flex justify-center items-center">
      <button
        className={`pagination-btn ${arrowBackStyle} hover:${!arrowBackStyle && 'bg-zinc-600'}`}
        aria-label="Back"
        type="button"
        onClick={backOnClick}
      >
        <BackIcon />
      </button>
      {pageNumbersLength.map(
        (page) =>
          page < currentPageNumber + 4 &&
          page > currentPageNumber - 4 && (
            <button
              className={`pagination-btn text-base hover:bg-zinc-600 ${page === currentPageNumber && 'bg-gray-500'}`}
              aria-label="Page"
              type="button"
              onClick={() => setCurrentPageNumber(page)}
            >
              {page}
            </button>
          ),
      )}
      <button
        className={`pagination-btn ${arrowForwardStyle} hover:${!arrowForwardStyle && 'bg-zinc-600'}`}
        aria-label="Forward"
        type="button"
        onClick={forwardOnClick}
      >
        <ForwardIcon />
      </button>
    </div>
  );
};
