import { Globe } from "lucide-react";

const LanguageToggle = ({ lang, setLang }) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-400" />
      <div className="flex items-center bg-slate-100 rounded-lg p-1">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            lang === "en"
              ? "bg-white text-slate-800 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ur")}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            lang === "ur"
              ? "bg-white text-slate-800 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          اردو
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
