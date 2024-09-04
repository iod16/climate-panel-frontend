<template>
  <v-card class="sub-title" v-if="forecast">
    <v-card-title>Previsão para as próximas horas</v-card-title>
  </v-card>
  <v-row class="sumary-hourly-forecast" v-if="forecast">
    <v-col v-for="(hour, index) in hourlyForecast" :key="index" cols="12" md="2">
      <v-card>
        <v-card-title>{{ formatTime(hour.dt) }}</v-card-title>
        <v-card-text>
          <WeatherIcon :icon="hour.weather[0].icon" />
          <p>{{ hour.main.temp }}°C</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import WeatherIcon from './WeatherIcon.vue';

export default {
  props: ['forecast'],
  components: {
    WeatherIcon
  },
  computed: {
    hourlyForecast() {
      return this.forecast.slice(0, 8);
    }
  },
  methods: {
    formatTime(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.getHours() + ':00';
    }
  }
};
</script>
<style scoped>
  .sub-title {
    margin: 20px 0;
  }
  .sumary-hourly-forecast {
    margin-top: 12px;
  }
</style>