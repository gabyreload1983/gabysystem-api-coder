import mysql from "mysql";

const urbano = mysql.createConnection({
  host: process.env.URBANO_HOST,
  database: process.env.URBANO_DB,
  password: process.env.URBANO_PASS,
  user: process.env.URBANO_USER,
});

export default urbano;
