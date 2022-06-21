const cors = require("cors");
const express = require("express");
const app = express();

const port = 3000;

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, (_) => console.log(`Apps is listening at ${port}`));
