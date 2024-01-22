const Header = ({ text, onClick }) => {
  return (
    <header className="w-screen bg-white h-[60px] flex items-center justify-center shadow-md font-400 text-lg">
      {text}
      <button
        className="p-2 rounded-md absolute left-3"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
