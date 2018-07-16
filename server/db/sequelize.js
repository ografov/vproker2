const Sequelize = require('sequelize');

const sequelize = new Sequelize('db', null, null, {
  dialect: 'sqlite',
  storage: './vproker.db'
});

export default sequelize;