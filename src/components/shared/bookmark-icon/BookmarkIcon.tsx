interface Props {
  isActive: boolean;
  onClick?: () => void;
}

export const BookmarkIcon: React.FC<Props> = ({ isActive, onClick }) => {
  const source = `./bookmark-icon${isActive ? '-active' : ''}.svg`;
  console.log('source:', source);
  return (
    <button onClick={onClick}>
      <img src={source} alt="" />
    </button>
  );
};
