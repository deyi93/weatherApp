// src/pages/Home.tsx
import React, { useEffect } from 'react';
import CurrentWeather from '../components/currentWeather';
import Forecast from '../components/forecast';

interface Props {
  city: string;
  weather: any;
  forecast: any;
  onSearch: (city: string) => Promise<void>;
}

const Home: React.FC<Props> = ({ city, weather, forecast, onSearch }) => {
  // useEffect(() => {
  //   onSearch(city);
  // }, []);
  useEffect(() => {
    // Only fetch if there's no data yet (first render)
    if (!weather && city) {
      onSearch(city);
    }
  }, [city, weather, onSearch]);
  return (
    <div className="home-page">
      {/* <h1>Weather in {city}</h1> */}
      {weather && (
        <CurrentWeather
          city={weather.name}
          temperature={Math.round(weather.main.temp)}
          description={weather.weather[0].description}
          icon={weather.weather[0].icon}
          humidity={weather.main.humidity}
          wind={weather.wind.speed}
          visibility={weather.visibility}
          windDeg={weather.wind.deg}
        />
      )}
      {forecast && <Forecast forecastList={forecast.list} />}
    </div>
  );
};

export default Home;
