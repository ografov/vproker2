import express from 'express'

const app = express()

import config from './config/express'      // ADDED
config(app)                                // ADDED


app.get('/', (req, res) => {
  res.status(200).send('hello')
})

app.post('/', (req, res) => {
    const message = `hello ${req.body.to}!`
    res.json({ status: 'ok', message: message })
})

export default app