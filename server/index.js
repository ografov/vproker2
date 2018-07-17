import app from './server'

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3004

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`)
})

import Tool from './models/tool';
Tool.findAll().then(data => {
    data.map(o => console.log(o.get()))
});

