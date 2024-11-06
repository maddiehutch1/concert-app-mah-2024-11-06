let express = require("express");
let app = new express();                                                                     
app.set("view engine", "ejs");

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.czkqq60wugm7.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "Testing123",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((results) => {
  res.render("index", {aConcerts: results});
 }); 
});
app.listen(3000);
