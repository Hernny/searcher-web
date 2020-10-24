<template>
  <b-container>
    <div>
      <br>
      <div class="text-center">
          <h1 class="text-white">Central Search</h1>
      </div>
      <br>
      <!-- search input -->
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input v-model="search" type="search" @change="request" placeholder="Press Enter to search"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <br>
      <br>
      <!-- loader -->
      <div v-if="load" class="text-center">
        <b-spinner variant="primary" type="grow" label="Loading..."></b-spinner>&nbsp;
        <b-spinner variant="danger" type="grow" label="Loading..."></b-spinner>&nbsp;
        <b-spinner variant="warning" type="grow" label="Loading..."></b-spinner>
      </div>
    </div>
    <!-- responses-->
    <div v-if="response && !load">
      <!-- itunes response -->
      <h1 class="text-white" v-if="response.itunes.length != 0">iTunes</h1>
      <br>
      <b-row >
        <b-col class="item" v-for="item in response.itunes" :key="item"  lg="3" md="4" sm="6">
          <b-card no-body class="text-center">
            <div class="bg-primary text-light">
              {{item}} <b-icon-music-note></b-icon-music-note>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <br>
      <!-- tvmaze response -->
      <h1 class="text-white" v-if="response.tvmaze.length != 0">TvMaze</h1>
      <br>
      <b-row >
        <b-col class="item" v-for="item in response.tvmaze" :key="item"  lg="3" md="4" sm="6">
          <b-card no-body class="text-center">
            <div class="bg-danger text-light">
              {{item}} <b-icon-tv></b-icon-tv>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <br>
      <!-- crcind response -->
      <h1 class="text-white" v-if="response.crcind.length != 0">Crcind</h1>
      <br>
      <b-row >
        <b-col class="item" v-for="item in response.crcind" :key="item"  lg="3" md="4" sm="6">
          <b-card no-body class="text-center">
            <div class="bg-warning text-light">
              {{item}} <b-icon-person></b-icon-person>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <br>
    <br>
  </b-container>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  name: "Home",
  data() {
    return {
      search: '',
      load: false,
      response: null
    }
  },
  methods: {
    request:function (){
      if (this.search != '') {
        this.load = true;
        axios
          .get(`/search`, { params: { term: this.search} })
          .then(response => {
            this.response = response.data;
            this.load = false;
          })
      }
    }
  }
}
</script>
<style lang="scss">
.item {
  margin-bottom:10px;
}
</style>