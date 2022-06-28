import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase bg-gray-light px-8 py-2 font-bold text-[10px] rounded-full hover:bg-opacity-75 active:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};
