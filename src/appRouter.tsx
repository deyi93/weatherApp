// src/AppRouter.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import SearchHistory from './pages/searchAndHistory';
import SearchBar from './components/searchBar';
import { fetchCurrentWeather, fetchForecast } from './utils/api';

const AppRouter = () => {
  const [city, setCity] = useState('Singapore');
  const [weather, setWeather] = useState<any | null>(null);
  const [forecast, setForecast] = useState<any | null>(null);
  const [searchInput, setSearchInput] = useState('Singapore');
  const getWeatherData = async (selectedCity: string) => {
    try {
        const weatherData = await fetchCurrentWeather(selectedCity);
        // console.log(weatherData);
        const forecastData = await fetchForecast(selectedCity);
        console.log(forecastData);
        setCity(selectedCity);
        setWeather(weatherData);
        setForecast(forecastData);
    } catch (err) {
        throw err;
    }
  };

  return (
    <Router>
      {/* <div className="app-container"> */}
      <div className="sticky-header">
        <div className="nav-div">
          <nav className="nav-bar" style={{display: 'flex',flexDirection: 'row',  padding: '1rem',  alignItems: 'center'}}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/history">Search History</Link>
          </nav>
        </div>
       
        {/* <div className="search-bar-div"> */}
          <SearchBar
            input={searchInput} 
            setInput={setSearchInput} 
            onSearch={getWeatherData}
          />
        {/* </div> */}
      </div>
      {/* </div> */}



      <Routes>
        <Route
          path="/"
          element={
            <Home
              city={city}
              weather={weather}
              forecast={forecast}
              onSearch={getWeatherData}
            />
          }
        />
        <Route path="/history" element={
          <SearchHistory 
            onSearch={getWeatherData}
            input={searchInput}
            setInput={setSearchInput} 
          />
          } 
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
