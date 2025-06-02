import React from 'react';
import '../App.css';

interface ForecastItem {
  dt_txt: string;
  main: { temp_min: number; temp_max: number };
  weather: { description: string; icon: string }[];
}

interface ForecastProps {
  forecastList: ForecastItem[];
}
function groupForecastByDate(forecastList: ForecastItem[]) {
  const groups: { [date: string]: ForecastItem[] } = {};

  forecastList.forEach((item) => {
    const date = new Date(item.dt_txt).toLocaleDateString(undefined, {
      // year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(item);
  });

  return groups;
}
const Forecast: React.FC<ForecastProps> = ({ forecastList }) => {
  const groupedForecast = groupForecastByDate(forecastList);
  const today = new Date().toLocaleDateString(undefined, {
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="forecast-wrapper">
      <h3 className="forecast-title">5-day Forecast (3 Hours)</h3>
      <div className="forecast-card">
        {Object.entries(groupedForecast).map(([date, items]) => (
          <div key={date}>
            <div className="forecast-day-label">
              {date === today ? 'Today' : date}
            </div>
            {items.map((item, index) => (
              <div className="forecast-item" key={index}>
                <div className="forecast-time">
                  {new Date(item.dt_txt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false, // ← THIS ensures 24-hour format
                  })}
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  className="forecast-icon"
                />
                <div className="forecast-temp">{item.main.temp_min}/{item.main.temp_max}°C</div>
                <div className="forecast-desc">{item.weather[0].description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
