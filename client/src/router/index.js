import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import OrderPage from "@/components/OrdersPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/orders",
      name: "OrderPage",
      component: OrderPage
    }
  ]
});
