const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'data.db'
  });


module.exports = connection; 