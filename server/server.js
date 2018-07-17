import express from "express";
import config from "./config/express";

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
