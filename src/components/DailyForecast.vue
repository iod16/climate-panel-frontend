<template>
  <v-card class="sub-title" v-if="forecast">
    <v-card-title>Previsão para os próximos dias</v-card-title>
  </v-card>
  <v-row v-if="forecast">
    <v-col v-for="(day, index) in dailyForecast" :key="index" cols="12" md="3">
      <v-card>
        <v-card-title>{{ formatDate(day.dt) }}</v-card-title>
        <v-card-text>
          <WeatherIcon :icon="day.weather[0].icon" />
          <p>Mín: {{ day.main.temp_min }}°C</p>
          <p>Máx: {{ day.main.temp_max }}°C</p>
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
    dailyForecast() {
      return this.forecast.filter((item, index) => index % 8 === 0); // Seleciona a cada 8 registros para previsões diárias
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    }
  }
};
</script>
<style scoped>
  .sub-title {
    margin: 20px 0;
  }
</style>