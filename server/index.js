import app from './server'

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3001

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`)
})

import Order from './models/order';
Order.findAll().then(orders => {
    orders.map(o => console.log(o.get()))
});

