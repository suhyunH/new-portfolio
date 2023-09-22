function NavItem({
  scrolling,
  navItem,
  scrollingTop,
  number,
}: {
  scrolling: number | null | undefined;
  navItem: string;
  number: number;
  scrollingTop: (scrolling: number) => void;
}) {
  return (
    <button
      className={`sm:text-sm text-xs font-semibold  cursor-pointer px-2 lg:px-3 py-1 hover:text-[#2978b5]  text ${
        scrolling === number ? "text-[#2978b5]" : "text-gray-800"
      } `}
      onClick={() => scrollingTop(number)}
    >
      {navItem}
    </button>
  );
}
export default NavItem;
