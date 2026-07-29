import { Search } from "lucide-react";

const HeaderSearch = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 bg-gray-300 border border-gray-300 rounded-full px-4 py-2 w-full max-w-[700px] ${className}`}
    >
      <input
        type="text"
        placeholder="Search for tissue, bags, orders and more.."
        className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 text-gray-900 font-medium"
      />
      <button 
        type="button" 
        aria-label="Search"
        className="text-black hover:opacity-75 transition-opacity shrink-0 flex items-center justify-center"
      >
        <Search size={18} />
      </button>
    </div>
  );
};

export default HeaderSearch;