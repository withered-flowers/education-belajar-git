const cors = require("cors");
const express = require("express");
const app = express();

const port = 3000;

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Bikin endpoint get / untuk nampilin json {micin:hello world}
app.get("/", (req, res) => {
  res.status(200).json({
    micin: "hello world",
  });
});

app.listen(port, (_) => console.log(`Apps is listening at ${port}`));
