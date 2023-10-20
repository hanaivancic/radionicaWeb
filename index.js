const express = require("express");
const pgp = require("pg-promise")();

const db = pgp(
  "postgres://radionica_baza_user:SP7LJqCRhrxgtLLsNbOUeM89W9resgJD@dpg-ckp4fbs1tcps739v160g-a.frankfurt-postgres.render.com/radionica_baza"
);
var cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

//app.get("/", (req, res) => {
//  res.send("Hello World!");
//});

//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`);
//});

app.get("/", async (req, res) => {
  db.any("SELECT * from public.users")
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
