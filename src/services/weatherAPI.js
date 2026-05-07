const API_KEY = "16424b0e2472f30f3e5e3d9114cbee70";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Common city name mappings for Pakistan
const CITY_MAPPINGS = {
  swat: "Mingora",
  swatvalley: "Mingora",
  hunza: "Karimabad",
  gilgit: "Gilgit",
  chitral: "Chitral",
  skardu: "Skardu",
  murree: "Murree",
  naran: "Balakot",
  kaghan: "Balakot",
  nathiagali: "Nathia Gali",
  abbottabad: "Abbottabad",
  mansehra: "Mansehra",
  battagram: "Battagram",
  kohistan: "Dasu",
  dir: "Dir",
  malakand: "Batkhela",
  buner: "Buner",
  shangla: "Alpuri",
  kohat: "Kohat",
  bannu: "Bannu",
  deraismailkhan: "Dera Ismail Khan",
  tank: "Tank",
  lakki: "Lakki Marwat",
  karak: "Karak",
  hangu: "Hangu",
  parachinar: "Parachinar",
  kurram: "Parachinar",
  waziristan: "Miranshah",
  orakzai: "Kalaya",
  khyber: "Landi Kotal",
  bajaur: "Khar",
  mohmand: "Ghalanai",
  swabi: "Swabi",
  mardan: "Mardan",
  charsadda: "Charsadda",
  nowshera: "Nowshera",
  kohat: "Kohat",
  attock: "Attock",
  jhelum: "Jhelum",
  gujrat: "Gujrat",
  sialkot: "Sialkot",
  gujranwala: "Gujranwala",
  sheikhupura: "Sheikhupura",
  kasur: "Kasur",
  okara: "Okara",
  pakpattan: "Pakpattan",
  vehari: "Vehari",
  bahawalnagar: "Bahawalnagar",
  rahimyarkhan: "Rahim Yar Khan",
  sadiqabad: "Sadiqabad",
  khanpur: "Khanpur",
  liaquatpur: "Liaquatpur",
  deraghazikhan: "Dera Ghazi Khan",
  muzaffargarh: "Muzaffargarh",
  layyah: "Layyah",
  bhakkar: "Bhakkar",
  khushab: "Khushab",
  sargodha: "Sargodha",
  mianwali: "Mianwali",
  talagang: "Talagang",
  chakwal: "Chakwal",
  rawalpindi: "Rawalpindi",
  taxila: "Taxila",
  wah: "Wah",
  hasanabdal: "Hasan Abdal",
  attock: "Attock",
  kamra: "Kamra",
  pindigheb: "Pindi Gheb",
};

export const getWeatherByCity = async (city) => {
  try {
    // Check if city has a known mapping
    const cityLower = city.toLowerCase().replace(/\s+/g, "");
    const mappedCity = CITY_MAPPINGS[cityLower] || city;

    const response = await fetch(
      `${BASE_URL}?q=${mappedCity},PK&units=metric&appid=${API_KEY}`,
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `City "${city}" not found. Try: Mingora, Murree, Abbottabad, Swabi, Mardan, or other major cities.`,
      );
    }

    const data = await response.json();

    return {
      city: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert to km/h
      feelsLike: Math.round(data.main.feels_like),
    };
  } catch (error) {
    throw new Error(error.message || "Failed to fetch weather data");
  }
};

export const getPakistanCitiesWeather = async (cities) => {
  const promises = cities.map((city) => getWeatherByCity(city));
  const results = await Promise.allSettled(promises);
  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
};
