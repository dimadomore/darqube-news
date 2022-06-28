import { PropsWithChildren } from 'react';
import { Tabs } from 'components/shared';

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
      <div className="mb-4">
        <Tabs items={tabs} />
      </div>
      {children}
    </main>
  );
};
