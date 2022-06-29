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

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mt-9 px-5">
      <div className="flex justify-between mb-5">
        <Tabs items={tabs} />
        <Search onChange={() => {}} />
      </div>
      {children}
    </main>
  );
};
