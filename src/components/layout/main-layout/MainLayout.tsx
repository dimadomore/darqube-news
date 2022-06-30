import { PropsWithChildren } from 'react';
import { Tabs, Search } from 'components/shared';

const tabs = [
  {
    title: 'News',
    link: '/news',
  },
  {
    title: 'Bookmarks',
    link: '/bookmarks',
  },
];

interface Props {
  setSearchValue: any;
}

export const MainLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  setSearchValue,
}) => {
  return (
    <main className="mt-9 px-5">
      <div className="flex justify-between mb-5">
        <Tabs items={tabs} />
        <Search onChange={setSearchValue} />
      </div>
      {children}
    </main>
  );
};
