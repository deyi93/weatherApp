// src/components/CurrentWeather.tsx
// import React from 'react';

// interface CurrentWeatherProps {
//   city: string;
//   temperature: number;
//   description: string;
//   icon: string; // Icon code from OpenWeather
// }

// const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city, temperature, description, icon }) => {
//   return (
//     <div className="weather-card">
//       <h2>{city}</h2>
//       <p>{description}</p>
//       <img
//         src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
//         alt={description}
//       />
//       <h3>{temperature}°C</h3>
//     </div>
//   );
// };

// export default CurrentWeather;
import React from 'react';
import '../App.css'
interface CurrentWeatherProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  wind: number;
  visibility: number; // in meters
  windDeg: number;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  city,
  temperature,
  description,
  icon,
  humidity,
  wind,
  visibility,
  windDeg
}) => {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // return (
  //   <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full text-gray-800">
  //     <p className="text-sm text-gray-500 mb-2">{today}</p>
  //     <div className="flex items-center justify-between mb-4">
  //       <img
  //         src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
  //         alt={description}
  //         className="w-20 h-20"
  //       />
  //       <div className="text-right">
  //         <h2 className="text-3xl font-bold">{Math.round(temperature)}°C</h2>
  //         <p className="capitalize text-gray-600">{description}</p>
  //       </div>
  //     </div>
  //     <div className="flex justify-between text-sm border-t pt-4 text-gray-700">
  //       <div className="text-center">
  //         <p className="font-semibold">Humidity</p>
  //         <p>{humidity} %</p>
  //       </div>
  //       <div className="text-center">
  //         <p className="font-semibold">Winds</p>
  //         <p>{wind.toFixed(2)} m/s</p>
  //       </div>
  //       <div className="text-center">
  //         <p className="font-semibold">Visibility</p>
  //         <p>{(visibility / 1000).toFixed(0)} km</p>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
      <div className="weather-card">
        <p className="weather-date">{today}</p>
        <div className="weather-main">
          <div className='weather-divider'></div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="weather-icon"
          />
          <div className='weather-divider'></div>
          <div className='weather-divider'></div>
          <div className="weather-temp-desc">
            <p className="weather-temp">{temperature}°C</p>
            <p className="weather-desc">{description}</p>
          </div>
          <div className='weather-divider'></div>
        </div>
        <div className="weather-details">
          <div className="text-center">
            <p>Humidity</p>
            <p className='text-bold'>{humidity}%</p>
          </div>
          <div className="text-center">
            <p>Winds</p>
            <div className="wind-info">
              <span className="wind-arrow" style={{ transform: `rotate(${(windDeg+180)%360}deg)` }}>↑</span>
              <span className='text-bold'>{wind.toFixed(1)} m/s</span>
            </div>
          </div>
          <div className="text-center">
            <p>Visibility</p>
            <p className='text-bold'>{(visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>
      </div>  
  )
};

export default CurrentWeather;


