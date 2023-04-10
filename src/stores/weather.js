import axios from 'axios';
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {


  // 
  state:  () =>({
    api_key: '1bf86ecee4e439c812652791694420ca',
    baseUrl: 'https://api.openweathermap.org/data/3.0/',
    weather_icon: 'https://openweathermap.org/img/wn/',
    location_query: '',
    weather: {},


  }),
  getters: {},
  actions: {
    async fetchWeather(e){
      if (e.key=='Enter') {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);
        console.log(data);
        this.weather = data;
        
      }
    }
  }

}

  
)
