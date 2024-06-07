import { RxHamburgerMenu } from 'react-icons/rx';
type HamburgerButtonProps = {
  onClick: () => void;
};

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
}) => {
  return (
    <div className="md:hidden">
      <button aria-label="show menu" onClick={onClick}>
        <RxHamburgerMenu aria-label="hamburger icon" size={25} />
      </button>
    </div>
  );
};
