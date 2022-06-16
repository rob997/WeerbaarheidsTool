const express = require("express");
const app = express();
const rp = require("request-promise");
const $ = require("cheerio");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello !!!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));
