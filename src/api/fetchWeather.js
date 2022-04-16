import axios from "axios";
const API_KEY = '63e885ce13mshb34362e83ecc19cp11bdb1jsnf7620e5132a1'
const LocationURL = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation'
const WeatherURL = 'https://community-open-weather-map.p.rapidapi.com/weather'

const LocationOptions = {
  params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
  headers: {
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
    'X-RapidAPI-Key': API_KEY
  }
};

// Get Location City
export const fetchLocation = async () => {
    const { data } = await axios.get(LocationURL, LocationOptions)
    const { city } = data;
      return city;
}

// Get Weather Data
export const fetchWeather = async (query) => {
  const weatherOptions = {
    params: {
      q: query,
      units: 'metric',
      mode: 'JSON'
    },
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY
    }
  };
  const { data } = await axios.get(WeatherURL, weatherOptions)
    return data;
}







