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
    <main className="container mx-auto mt-9 px-5 pb-5">
      <div className="xl:flex justify-between items-center mb-5">
        <Tabs items={tabs} />
        <div className="mt-4 xl:mt-0">
          <Search onChange={setSearchValue} />
        </div>
      </div>
      {children}
    </main>
  );
};
