import axios from "axios";
const LocationURL = process.env.REACT_APP_Location_URL
const IPLocationApiKey = process.env.REACT_APP_IP_Location_Api_Key
const WeatherURL = process.env.REACT_APP_Weather_URL
const WeatherAPIKEY = process.env.REACT_APP_Weather_API_KEY
const xRapidApiKey = process.env.REACT_APP_Xrapid_Api_Key

const LocationOptions = {
  params: {apikey: IPLocationApiKey},
  headers: {
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
    'X-RapidAPI-Key': xRapidApiKey
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
      mode: 'JSON',
      appid: WeatherAPIKEY,
      units: 'metric',
    },
  };
  const { data } = await axios.get(WeatherURL, weatherOptions)
    return data;
}







