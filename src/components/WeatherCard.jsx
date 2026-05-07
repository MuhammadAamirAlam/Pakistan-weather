import { motion } from "framer-motion";
import { Droplets, Wind, Thermometer } from "lucide-react";

const WeatherCard = ({ weather, lang }) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const tempColor = "text-blue-600";

  return (
    <motion.div
      className="weather-card p-5 cursor-pointer"
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* City Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">{weather.city}</h3>
        <img
          src={getWeatherIcon(weather.icon)}
          alt={weather.condition}
          className="w-12 h-12"
        />
      </div>

      {/* Temperature */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className={`text-4xl font-bold ${tempColor}`}>
            {weather.temperature}°
          </span>
          <span className="text-slate-400 text-sm">C</span>
        </div>
        <p className="text-slate-500 text-sm capitalize mt-1">
          {weather.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 my-4"></div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Droplets className="w-4 h-4" />
            <span className="text-sm">
              {lang === "ur" ? "نمی" : "Humidity"}
            </span>
          </div>
          <span className="text-sm font-semibold text-slate-700">
            {weather.humidity}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Wind className="w-4 h-4" />
            <span className="text-sm">{lang === "ur" ? "ہوا" : "Wind"}</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">
            {weather.windSpeed} km/h
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Thermometer className="w-4 h-4" />
            <span className="text-sm">
              {lang === "ur" ? "محسوس ہوتا ہے" : "Feels like"}
            </span>
          </div>
          <span className="text-sm font-semibold text-slate-700">
            {weather.feelsLike}°C
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
