import { useCallback } from 'react';
import { Button } from './Button';

interface Props {
  totalCount: number;
  currentPage: number;
  perPageNumber: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  totalCount,
  currentPage,
  perPageNumber,
  onChange,
}) => {
  const handlePrev = useCallback(
    () => onChange(currentPage - 1),
    [currentPage, onChange],
  );

  const handleNext = useCallback(
    () => onChange(currentPage + 1),
    [currentPage, onChange],
  );

  if (!totalCount) return null;

  return (
    <div className="flex justify-between items-center w-full">
      <div className="text-sm hidden xl:block">
        <span>
          {(currentPage - 1) * perPageNumber + 1}-
          {Math.min(perPageNumber * currentPage, totalCount)}
        </span>
        <span className="opacity-25 ml-2">out of {totalCount}</span>
      </div>
      <div className="w-full xl:w-auto">
        <Button
          disabled={currentPage === 1}
          onClick={handlePrev}
          className="hidden xl:inline"
        >
          Previous
        </Button>
        <Button
          disabled={currentPage > totalCount / perPageNumber}
          onClick={handleNext}
          className="xl:ml-[10px] w-full xl:w-auto"
        >
          <span className="hidden xl:inline">Next</span>
          <span className="xl:hidden">Show more</span>
        </Button>
      </div>
    </div>
  );
};
