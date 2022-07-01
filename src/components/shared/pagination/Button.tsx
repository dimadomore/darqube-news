import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`uppercase bg-gray-light px-8 py-2 font-bold text-[10px] rounded-full hover:bg-opacity-75 active:opacity-50 disabled:opacity-25 ${className} `}
    >
      {children}
    </button>
  );
};
