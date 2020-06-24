const { Pool } = require("pg");

module.exports = new Pool({
  database: "foodfy",
  user: "", //--usuário
  password: "", // -- senha
  host: "localhost",
  port: 5432,
});
