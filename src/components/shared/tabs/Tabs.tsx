import { useRouter } from 'next/router';

import { Tab } from './Tab';

interface Props {
  items: any[];
}

export const Tabs: React.FC<Props> = ({ items }) => {
  const { route } = useRouter();

  if (!items?.length) return null;

  return (
    <ul className="flex font-bold text-3xl">
      {items.map((item, index) => (
        <li key={index} className="last-of-type:ml-2">
          <Tab link={item.link} isActive={route === item.link}>
            {item.title}
          </Tab>
        </li>
      ))}
    </ul>
  );
};
