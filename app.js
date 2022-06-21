const express = require("express");
const app = express();

const port = 3000;

// Bikin endpoint get / untuk nampilin json {micin:hello world}
app.get("/", (req, res) => {
  res.status(200).json({
    micin: "hello world",
  });
});

app.listen(port, (_) => console.log(`Apps is listening at ${port}`));
