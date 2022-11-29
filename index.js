
const express = require("express");

const routerAPI = require("./routes");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Abrir Express");
});

app.use(express.json());

routerAPI(app);

app.listen(port, () => {
  console.log(`Listening from port ${port}`);
})