<template>
  <b-container>
    <div>
      <br>
      <br>
      <br>
      <div class="text-center">
          <h1 class="text-white">CriptoAlert</h1>
      </div>
      <br>
      <!-- search input -->
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
          <b-input-group size="sm" class="mb-2">
            <b-form-select v-model="productId" :options="products" ></b-form-select>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
          <b-input-group size="sm" class="mb-2">
            <b-form-input v-model="Username" type="text" placeholder="User Name"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
          <b-input-group size="sm" class="mb-2">
            <b-form-select v-model="transaction" :options="types" ></b-form-select>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
           <b-input-group size="sm" class="mb-2">
            <b-form-input v-model="amount" type="number" placeholder="Amount"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
          <b-input-group size="sm" class="mb-2">
            <b-form-input v-model="price" type="number" placeholder="Price"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center align-items-center">
        <b-col lg="4" md="6" sm="12">
          <b-input-group size="sm" class="mb-2">
            <b-button variant="primary" @click="request"><b-icon-cursor></b-icon-cursor>Send</b-button>
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
      productId: null,
      Username: '',
      transaction: null,
      amount: '',
      price: '',
      load: false,
      response: null,
      products: [
        { value: null, text: 'Please select an product' },
        { value: 'BTCCAD.SPOT', text: 'BTC-CAD' },
        { value: 'BTCUSD.SPOT', text: 'BTC-USD' }
      ],
      types: [
        { value: null, text: 'Please select an transaction type' },
        { value: 'buy', text: 'Buy' },
        { value: 'sell', text: 'Sell' }
      ]
    }
  },
  methods: {
    request:function (){
      if (this.productId != null || this.Username != '' || this.transaction != null || this.amount != '' || this.price != '') {
        this.load = true;
        axios
          .post(`/alert`, {
            productId: this.productId,
            Username: this.Username,
            transaction: this.transaction,
            amount: this.amount,
            price: this.price,
          })
          .then(response => {
            alert("CriptoAlert \n Your alert has been successfully saved")
            this.response = response.data;
            this.productId = null,
            this.Username = '',
            this.transaction = null,
            this.amount = '',
            this.price = '',
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