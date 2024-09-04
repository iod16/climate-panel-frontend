<template>
  <v-img :src="iconUrl" :alt="icon" contain class="weather-icon" />
</template>

<script>
export default {
  props: ['icon'],
  computed: {
    iconUrl() {
      return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
    }
  }
};
</script>

<style scoped>
.weather-icon {
  width: 50px;
  height: 50px;
  position: unset;
}
</style>