# Pakistan Weather App | پاکستان موسم ایپ

A modern, animated React weather application for Pakistan with English/Urdu language support.

## Features

- 🌤️ **Real-time Weather Data** - Fetches weather data from OpenWeatherMap API
- 🏙️ **Major Cities** - Pre-loaded weather cards for Karachi, Lahore, Islamabad, Peshawar, and Quetta
- 🔍 **City Search** - Search for any city in Pakistan
- 🌐 **Bilingual Support** - Toggle between English and Urdu languages
- ✨ **Smooth Animations** - Built with Framer Motion for beautiful transitions
- 🎨 **Modern Design** - Clean blue color theme with glassmorphism effects
- 📱 **Responsive** - Works on desktop, tablet, and mobile devices
- ⚡ **No Backend** - Runs entirely on the client side

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **OpenWeatherMap API** - Weather data provider

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free)

## Getting Started

### 1. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to API keys section
4. Copy your API key

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key

Open `src/services/weatherAPI.js` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key:

```javascript
const API_KEY = 'your_actual_api_key_here';
```

### 4. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Project Structure

```
weather-app/
├── public/
│   └── weather-icon.svg
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx      # Weather card component with animations
│   │   ├── SearchBar.jsx        # Search bar with focus effects
│   │   ├── LanguageToggle.jsx   # Language switcher
│   │   └── LoadingSpinner.jsx   # Loading animation
│   ├── services/
│   │   └── weatherAPI.js        # OpenWeatherMap API integration
│   ├── translations/
│   │   └── translations.js      # English/Urdu translations
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## Usage

### View Major Cities

The app automatically loads weather data for 5 major Pakistani cities:
- Karachi (کراچی)
- Lahore (لاہور)
- Islamabad (اسلام آباد)
- Peshawar (پشاور)
- Quetta (کوئٹہ)

### Search for a City

1. Type any Pakistani city name in the search bar
2. Click the search button or press Enter
3. View the weather card for that city
4. Click "Clear" to return to major cities view

### Switch Language

Click the "English" or "اردو" button in the header to toggle between languages.

## Weather Card Information

Each weather card displays:
- City name
- Current temperature (°C)
- Weather condition with icon
- Humidity percentage
- Wind speed (km/h)
- Feels like temperature

## Customization

### Change Color Theme

Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // your custom colors
      }
    }
  }
}
```

### Add More Cities

Edit `src/App.jsx` and add cities to the `MAJOR_CITIES` array:

```javascript
const MAJOR_CITIES = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'YourCity'];
```

### Modify Animations

Animation settings are in each component using Framer Motion. Adjust duration, delay, and type as needed.

## API Rate Limits

OpenWeatherMap free tier allows:
- 60 calls/minute
- 1,000,000 calls/month

If you hit rate limits, consider caching results or upgrading to a paid plan.

## Troubleshooting

### API Key Error

Make sure you've replaced `YOUR_OPENWEATHERMAP_API_KEY` in `src/services/weatherAPI.js` with your actual key.

### City Not Found

- Ensure the city name is spelled correctly
- The city must be in Pakistan (the API searches with ",PK" suffix)
- Try using the English name of the city

### Styling Issues

If Tailwind classes aren't applying:
1. Clear your browser cache
2. Restart the dev server
3. Ensure `index.css` imports Tailwind directives

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ for Pakistan
