<template>
  <div>
    <input v-model="city" @keyup.enter="fetchWeather" placeholder="Digite o nome da cidade" />
    <button @click="fetchWeather">Buscar</button>

    <WeatherDisplay v-if="weatherData" :weatherData="weatherData" />

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import WeatherDisplay from '@/components/WeatherDisplay.vue';

export default {
  components: { WeatherDisplay },
  data() {
    return {
      city: 'Goiandira',
      weatherData: null,
      errorMessage: ''
    };
  },
  methods: {
    async fetchWeather() {
      try {
        const response = await this.$axios.get(`/weather`, {
          params: { city: this.city }
        });
        this.weatherData = response.data;
        this.errorMessage = '';
      } catch (error) {
        this.weatherData = null;
        this.errorMessage = 'Não foi possível obter os dados do clima.';
      }
    }
  },
  mounted() {
    this.fetchWeather();
  }
};
</script>

<style scoped>
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
