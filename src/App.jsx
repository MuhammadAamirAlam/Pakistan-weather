import { useState, useEffect } from "react";
import { Cloud, X, AlertCircle } from "lucide-react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import LanguageToggle from "./components/LanguageToggle";
import LoadingSpinner from "./components/LoadingSpinner";
import {
  getPakistanCitiesWeather,
  getWeatherByCity,
} from "./services/weatherAPI";
import { translations } from "./translations/translations";
import "./index.css";

const MAJOR_CITIES = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  useEffect(() => {
    loadMajorCitiesWeather();
  }, []);

  const loadMajorCitiesWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPakistanCitiesWeather(MAJOR_CITIES);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherByCity(city);
      setSearchResult(data);
    } catch (err) {
      setError(err.message);
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2.5 rounded-xl">
                <Cloud className="w-7 h-7 text-blue-600" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                {t.title}
              </h1>
            </div>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <SearchBar
            onSearch={handleSearch}
            onError={setError}
            translations={t}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 max-w-2xl mx-auto">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Search Result */}
        {!loading && searchResult && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-5 max-w-md mx-auto">
              <h2 className="text-xl font-bold text-slate-800">
                {lang === "ur" ? "تلاش کا نتیجہ" : "Search Result"}
              </h2>
              <button
                onClick={handleClearSearch}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
              >
                <X className="w-4 h-4" />
                {lang === "ur" ? "صاف کریں" : "Clear"}
              </button>
            </div>
            <div className="max-w-sm mx-auto">
              <WeatherCard weather={searchResult} lang={lang} />
            </div>
          </div>
        )}

        {/* Major Cities Section */}
        {!loading && !searchResult && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {t.majorCities}
              </h2>
              <p className="text-slate-500">
                {lang === "ur"
                  ? "پاکستان کے بڑے شہروں کا موسم"
                  : "Weather in major cities of Pakistan"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {weatherData.map((weather) => (
                <WeatherCard key={weather.city} weather={weather} lang={lang} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-slate-500 text-sm">
            {lang === "ur"
              ? "ڈیٹا OpenWeatherMap API سے حاصل کیا گیا ہے"
              : "Data provided by OpenWeatherMap API"}
          </p>
          <p className="text-slate-400 text-xs mt-1">
            &copy; 2024 Pakistan Weather App
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
