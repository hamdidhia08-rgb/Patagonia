import React from 'react';
import { MapPin, Calendar, Flag, Search } from 'lucide-react';

interface SearchBarProps {}

interface SearchInputItemProps {
  icon: React.ReactNode;
  title: string;
  placeholder: string;
}

const SearchInputItem: React.FC<SearchInputItemProps> = ({ icon, title, placeholder }) => (
  <div className="flex items-center space-x-2.5 p-2.5 cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out">
    <div className="p-2.5 bg-white rounded-lg shadow-sm border border-gray-100">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[15px] font-semibold text-gray-800">{title}</span>
      <span className="text-sm text-gray-500">{placeholder}</span>
    </div>
  </div>
);

const SearchTourBar: React.FC<SearchBarProps> = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recherche lancée...");
  };

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto p-3 md:p-0">
      <form 
        onSubmit={handleSearch} 
        className="
          flex flex-col md:flex-row items-stretch 
          bg-white rounded-2xl shadow-lg overflow-hidden 
          divide-y md:divide-y-0 md:divide-x divide-gray-200
        "
      >
        <div className="flex-1 min-w-0">
          <SearchInputItem
            icon={<MapPin className="w-5 h-5 text-orange-500" />}
            title="Where"
            placeholder="Search destinations"
          />
        </div>
        <div className="flex-1 min-w-0">
          <SearchInputItem
            icon={<Calendar className="w-5 h-5 text-orange-500" />}
            title="When"
            placeholder="Add dates"
          />
        </div>
        <div className="flex-1 min-w-0">
          <SearchInputItem
            icon={<Flag className="w-5 h-5 text-orange-500" />}
            title="Tour Type"
            placeholder="All tour"
          />
        </div>

        {/* Bouton Search */}
        <button
          type="submit"
          className="
            flex items-center justify-center
            md:py-2 py-3
            bg-gradient-to-r from-orange-400 to-orange-600
            hover:from-orange-500 hover:to-orange-700
            text-white font-semibold
            text-base
            md:rounded-r-2xl
            shrink-0
            w-full md:w-40
            shadow-md hover:shadow-lg
            transition-all duration-300 ease-in-out
          "
        >
          <Search className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchTourBar;
