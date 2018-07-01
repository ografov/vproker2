import express from "express";
import config from "./config/express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/vproker");

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error")
);

mongoose.connection.once("open", callback => {
  console.log("Connection Succeeded");
});

const app = express();

config(app);

app.get("/orders", (req, res) => {
  res.send([
    {
      id: 1,
      clientName: "Client name",
      clientPhoneNumber: "Client phone number",
      clientPassport: "Client pasport",
      paidPledge: "paid pladge"
    }
  ]);
});

export default app;
