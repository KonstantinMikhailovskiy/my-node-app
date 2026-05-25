const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from CI/CD!", status: "ok" });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log('App running on port ${port}');
  });
}

module.exports = app;
