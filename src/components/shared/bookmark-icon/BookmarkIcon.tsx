interface Props {
  isActive: boolean;
  onClick?: () => void;
}

export const BookmarkIcon: React.FC<Props> = ({ isActive, onClick }) => {
  const source = `./bookmark-icon${isActive ? '-active' : ''}.svg`;

  return (
    <button onClick={onClick} className="p-1">
      <img src={source} alt="" />
    </button>
  );
};
