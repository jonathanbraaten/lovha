import { IoMdClose } from 'react-icons/io';
type NavButtonProps = {
  onClick: () => void;
};
export const NavButton: React.FC<NavButtonProps> = ({ onClick }) => {
  return (
    <div className="md:hidden self-end py-4 px-4">
      <button aria-label="close menu" onClick={onClick}>
        <IoMdClose aria-label="x icon" size={25} />
      </button>
    </div>
  );
};
