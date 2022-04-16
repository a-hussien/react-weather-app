import { fetchLocation, fetchWeather } from './api/fetchWeather'
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [ city, setCity ] = useState('')
  const [ weather, setWeather ] = useState({})

  const initLocation = async () => {
    const city = await fetchLocation()
    const data = await fetchWeather(city)
      setWeather(data)
      setCity('')
  }

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(city)
      setWeather(data)
      setCity('')
    }
  }

  useEffect(() => {
    initLocation();
  }, []);

  
  return (
    <div className="main-container">
        <input 
        type="text"
        className="search"
        placeholder="Search ..."
        value={city}
        onChange={(e) => {setCity(e.target.value)}}
        onKeyPress={search} 
        />

      {
        weather.main && (
          <div className='city'>
            <h2 className='city-name'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className='city-temp'>
              <span>
                {Math.floor(weather.main.temp)}
                <sup>&deg;C</sup>
              </span>
              <span className='feels'>
                <i>feels like: {Math.round(weather.main.feels_like)}<sup>&deg;C</sup></i>
              </span>
              
            </div>
            <div className='info'>
              <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )
      }

    </div>

  );
}

export default App;
