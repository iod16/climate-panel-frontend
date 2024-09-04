<template>
  <div v-if="weatherData" class="weather-container">
    <h2>{{ weatherData.name }}</h2>
    <p>{{ weatherData.weather[0].description }}</p>
    <p>Temperatura: {{ weatherData.main.temp }} °C</p>
    <p>Sensação térmica: {{ weatherData.main.feels_like }} °C</p>
    <p>Umidade: {{ weatherData.main.humidity }}%</p>
    <p>Vento: {{ weatherData.wind.speed }} km/h</p>
    <img :src="getWeatherIcon(weatherData.weather[0].icon)" alt="Weather Icon" />
  </div>
</template>

<script>
export default {
  props: {
    weatherData: Object
  },
  methods: {
    getWeatherIcon(iconCode) {
      return `http://openweathermap.org/img/wn/${iconCode}.png`;
    }
  }
};
</script>

<style scoped>
.weather-container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.weather-container img {
  width: 100px;
  height: 100px;
}
</style>