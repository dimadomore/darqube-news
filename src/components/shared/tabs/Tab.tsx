import { PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props {
  isActive: boolean;
  link: string;
}

export const Tab: React.FC<PropsWithChildren<Props>> = ({
  isActive,
  children,
  link,
}) => {
  return (
    <Link href={link}>
      <a className={`${!isActive ? 'opacity-50' : ''}`}>{children}</a>
    </Link>
  );
};
