import api from "@/services/api";

export default {
  fetchOrders() {
    return api().get("orders");
  }
};
