const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city: string) => {
  const res = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
      console.log(res);
  if (!res.ok) throw new Error("City not found");
  return res.json();
};

export const fetchForecast = async (city: string) => {
  const res = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  if (!res.ok) throw new Error("Forecast not found");
  return res.json();
};
