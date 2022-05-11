interface HamburgerMenuProps {
  isMenuOpened: boolean;
  handleMenuClick: () => void;
}

export function HamburgerMenu({ isMenuOpened, handleMenuClick }: HamburgerMenuProps) {
  const menuBarStyle = 'transform transition w-full h-px bg-current absolute';

  return (
    <button
      type="button"
      className={`relative flex items-center space-x-2 focus:outline-none md:hidden z-20`}
      onClick={handleMenuClick}
    >
      <div className="w-6 h-6 flex items-center justify-center relative">
        <span
          className={`${menuBarStyle} ${
            isMenuOpened ? 'translate-y-0 rotate-45' : '-translate-y-2'
          }`}
        ></span>

        <span
          className={`${menuBarStyle} ${
            isMenuOpened ? 'opacity-0 translate-x-3' : 'opacity-100'
          }`}
        ></span>

        <span
          className={`${menuBarStyle} ${
            isMenuOpened ? 'translate-y-0 -rotate-45' : 'translate-y-2'
          }`}
        ></span>
      </div>
    </button>
  );
}
