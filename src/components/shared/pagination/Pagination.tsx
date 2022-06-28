import { Button } from './Button';

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  totalPages: number;
  perPageNumber: number;
}

export const Pagination: React.FC<Props> = ({
  totalPages,
  perPageNumber,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-sm">
        <span>1-{perPageNumber}</span>
        <span className="opacity-25 ml-2">out of {totalPages}</span>
      </div>
      <div>
        <Button onClick={onPrev}>Previous</Button>
        <Button onClick={onNext} className="ml-[10px]">
          Next
        </Button>
      </div>
    </div>
  );
};
