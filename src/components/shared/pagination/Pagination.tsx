import { useCallback } from 'react';
import { Button } from './Button';

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
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
    <div className="flex justify-between items-center">
      <div className="text-sm">
        <span>
          {(currentPage - 1) * perPageNumber + 1}-
          {Math.min(perPageNumber * currentPage, totalCount)}
        </span>
        <span className="opacity-25 ml-2">out of {totalCount}</span>
      </div>
      <div>
        <Button disabled={currentPage === 1} onClick={handlePrev}>
          Previous
        </Button>
        <Button
          disabled={currentPage > totalCount / perPageNumber}
          onClick={handleNext}
          className="ml-[10px]"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
