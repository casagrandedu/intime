const Sequelize = require('sequelize');

const DB = process.env.DB;

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  },
  operatorsAliases: Sequelize.Op
});
