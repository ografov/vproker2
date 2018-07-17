import express from "express";
import config from "./config/express";
import order from "./models/order"

const app = express();

config(app);

app.get("/orders", (req, res) => {
  order.findAll({}).then((orders) => {
    // res.send(orders.get());
    res.json(orders.map(o => o.get()))
  })
});

export default app;
