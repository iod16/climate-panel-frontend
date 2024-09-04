<template>
  <v-app>
    <WeatherHeader @searchCity="fetchWeatherData" />
    <v-container>
      <CurrentWeather :weather="weatherData.current" />
      <HourlyForecast :forecast="weatherData.forecast.list" />
      <DailyForecast :forecast="weatherData.forecast.list" />
    </v-container>
  </v-app>
</template>

<script>
import WeatherHeader from './components/WeatherHeader.vue';
import CurrentWeather from './components/CurrentWeather.vue';
import HourlyForecast from './components/HourlyForecast.vue';
import DailyForecast from './components/DailyForecast.vue';
import axios from 'axios';

export default {
  data() {
    return {
      weatherData: {
        current: null,
        forecast: {},
      },
      loading: false
    };
  },
  components: {
    WeatherHeader,
    CurrentWeather,
    HourlyForecast,
    DailyForecast
  },
  methods: {
    async fetchWeatherData(city) {
      this.loading = true;
      try {
        const response = await axios.get('http://mydashboard.local:8000/weather', { params: { city } });

        this.weatherData.current = response.data.current || {};
        this.weatherData.forecast = response.data.forecast || {};
        this.weatherData.message = '';
      } catch (error) {
        console.error('Failed to fetch weather data:', error);

        this.weatherData.current = null;
        this.weatherData.forecast = {};
        this.weatherData.message = '';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>