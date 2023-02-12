import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password123",
  database: "reel_dreams",
});

client.connect();

client.query(`Select * from r`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
