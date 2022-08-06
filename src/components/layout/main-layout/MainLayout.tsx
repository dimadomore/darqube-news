/* eslint-disable */
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
        {/* <a href="#" onClick={(e) => Clym && Clym.showWidget('', '', e)}>
          Privacy Center
        </a>
        <a
          href="#"
          onClick={(e) =>
            Clym &&
            Clym.showWidget('/requests/new/do_not_sell_my_information', '', e)
          }
        >
          Do not sell my personal information
        </a> */}
        <div className="mt-4 xl:mt-0">
          <Search onChange={setSearchValue} />
        </div>
      </div>
      {children}
    </main>
  );
};
