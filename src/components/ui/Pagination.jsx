const Pagination = () => {
  return (
    <div className="flex flex-row w-78.25 h-18.5 mt-12 border-[#e8e8e8] border-2 rounded-[6.73px]">
      <button className="w-21 border-[#e8e8e8] border-r-2 cursor-pointer">
        First
      </button>
      <button className="w-11.5 border-[#e8e8e8] border-r-2 cursor-pointer">
        1
      </button>
      <button className="w-11.5 border-[#e8e8e8] border-r-2 cursor-pointer">
        2
      </button>
      <button className="w-11.5 border-[#e8e8e8] border-r-2 cursor-pointer">
        3
      </button>
      <button className="w-21 cursor-pointer">Next</button>
    </div>
  );
};

export default Pagination;
