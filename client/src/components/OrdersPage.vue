
<template>
  <div class="orders">
    <h1>orders</h1>
    This file will list all the orders.

    <div v-for="order in orders" v-bind:key="order.id">
      <p>
        <span><b>{{ order.clientName }}</b></span><br />
        <span>{{ order.clientPassport }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import OrderService from "@/services/OrderService";

export default {
  name: "orders-page",
  data() {
    return {
      orders: []
    };
  },
  mounted() {
    debugger;
    this.getOrders();
  },
  methods: {
    async getOrders() {
      const response = await OrderService.fetchOrders();
      this.orders = response.data;
    }
  }
};
</script>
