// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// import React, { useEffect, useState } from 'react';
// import CurrentWeather from './components/currentWeather';
// import Forecast from './components/forecast';
// import SearchBar from './components/searchBar'; // We'll create this
// import { fetchCurrentWeather, fetchForecast } from './utils/api';

// const App = () => {
//   const [city, setCity] = useState('Singapore');
//   const [weather, setWeather] = useState<any | null>(null);
//   const [forecast, setForecast] = useState<any | null>(null);

//   const getWeatherData = async (selectedCity: string) => {
//     try {
//       const weatherData = await fetchCurrentWeather(selectedCity);
//       const forecastData = await fetchForecast(selectedCity);
//       setWeather(weatherData);
//       setForecast(forecastData);
//       setCity(selectedCity);
//     } catch (err) {
//       console.error('Failed to fetch weather data:', err);
//     }
//   };

//   useEffect(() => {
//     getWeatherData(city);
//   }, []);

//   return (
//     <div className="app-container">
//       <h1>Weather App</h1>

//       <SearchBar onSearch={getWeatherData} />

//       {weather && (
//         <CurrentWeather
//           city={weather.name}
//           temperature={Math.round(weather.main.temp)}
//           description={weather.weather[0].description}
//           icon={weather.weather[0].icon}
//         />
//       )}

//       {forecast && <Forecast forecastList={forecast.list} />}
//     </div>
//   );
// };

// export default App;

