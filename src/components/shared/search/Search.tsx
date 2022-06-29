import { ChangeEvent } from 'react';

interface Props {
  onChange: (value: string) => void;
}

export const Search: React.FC<Props> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute top-[9px] left-2 flex items-center">
        <img src="/search-icon.svg" alt="" />
      </span>
      <input
        type="text"
        placeholder="Search"
        name="search"
        onChange={handleChange}
        className="text-xs pl-[30px] pr-2 bg-[#191818] h-[30px] w-[162px] placeholder-[#686868] rounded"
      />
    </label>
  );
};
