const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const { getAll, getOne, update, create, deleteOne } = require("./products_controller")
const app = express();

app.use( json() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
}).catch( err => console.log(err) );

app.use(json())

app.get("/api/products", getAll)
app.get("/api/products/:id", getOne)
app.put("/api/products/:id", update)
app.post("/api/products", create)
app.delete("/api/products/:id", deleteOne )

app.listen(3000, console.log(`Listening on port 3000`));
