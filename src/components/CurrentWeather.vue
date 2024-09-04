<template>
  <v-card v-if="weather && weather.sys && weather.weather && weather.main && weather.wind">
    <v-card-title>
      {{ weather.name }} - {{ weather.sys.country }}
    </v-card-title>
    <v-card-text>
      <WeatherIcon :icon="weather.weather[0].icon" />
      <div>
        <p>Temperatura: {{ weather.main.temp }}°C</p>
        <p>Sensação Térmica: {{ weather.main.feels_like }}°C</p>
        <p>Descrição: {{ weather.weather[0].description }}</p>
        <p>Umidade: {{ weather.main.humidity }}%</p>
        <p>Vento: {{ weather.wind.speed }} m/s</p>
      </div>
    </v-card-text>
  </v-card>
  <v-card v-else>
    <v-card-text>
      Nenhum dado de clima disponível para essa pesquisa.
    </v-card-text>
  </v-card>
</template>

<script>
import WeatherIcon from './WeatherIcon.vue';

export default {
  props: ['weather'],
  components: {
    WeatherIcon
  },
};
</script>