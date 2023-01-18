const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const app = express();
const port = process.env.PORT || 8080;
app.locals.moment = moment;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/news"));

app.listen(port, () => console.log(`The Server is running on port: ${port}`));
