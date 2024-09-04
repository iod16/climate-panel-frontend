<template>
  <v-app-bar class="summary-current-weather teste" app color="primary" dark>
    <v-container>
      <v-row class="align-center justify-center" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <v-toolbar-title>Dashboard Climatológico</v-toolbar-title>
          <v-text-field
            label="Digite a cidade"
            v-model="city"
            @keyup.enter="searchCity"
            clearable
            class="mx-4 input-city"
            dense
          ></v-text-field>
          <v-btn @click="searchCity" class="ml-2 btn-search" outlined>
            Pesquisar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      city: 'Catalão'
    };
  },
  created() {
    this.searchCity();
  },
  methods: {
    searchCity() {
      this.$emit('searchCity', this.city);
    }
  }
};
</script>
<style scoped>
  .input-city {
    margin-top: 20px !important;
  }
  .btn-search {
    height: unset !important;
  }
  .v-toolbar-title {
    align-content: center;
  }
  .teste {
    position: relative !important;
  }
  .sumary-current-weather {
    width: 100%;
    top: 0;
    z-index: 1004;
  }
  .v-app-bar {
    padding: 0;
  }

  .v-toolbar-title {
    flex: 1;
    text-align: center;
  }

  .v-text-field,
  .v-btn {
    margin: 0 8px;
  }

  @media (max-width: 600px) {
    .v-app-bar {
      flex-direction: column;
    }

    .v-text-field,
    .v-btn {
      margin: 8px 0;
    }
  }
</style>