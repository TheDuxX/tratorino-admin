const Pesquisar = () => {
  return (
    <div className="w-screen flex flex-col">
      <div
        type="text"
        className="mx-[24px] mt-[20px] h-[48px] rounded-[48px] bg-white shadow-md border-[1px] border-strokes px-3 text-sm flex items-center justify-between"
      >
        <input type="text" placeholder="Pesquisar" className="px-2 focus:outline-none"/>
        <button className="text-slate-400 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pesquisar;
