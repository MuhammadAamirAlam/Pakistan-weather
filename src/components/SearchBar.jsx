import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch, onError, translations }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    // Reject country names
    const countryNames = [
      "pakistan",
      "india",
      "bangladesh",
      "afghanistan",
      "china",
      "iran",
      "saudi arabia",
      "uae",
      "united arab emirates",
      "turkey",
      "america",
      "usa",
      "united kingdom",
      "uk",
      "england",
      "france",
      "germany",
      "russia",
      "japan",
      "australia",
    ];
    if (countryNames.includes(trimmed.toLowerCase())) {
      onError("Please enter a city name, not a country name.");
      return;
    }

    onSearch(trimmed);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-stretch gap-0 shadow-md rounded-xl overflow-hidden border border-slate-200 bg-white">
        <div className="flex-1 flex items-center px-4">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={translations.searchPlaceholder}
            className="w-full py-3.5 text-base outline-none text-slate-700 placeholder-slate-400 bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="btn-primary rounded-none flex items-center gap-2"
        >
          <span className="hidden sm:inline">{translations.searchButton}</span>
          <Search className="w-4 h-4 sm:hidden" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
