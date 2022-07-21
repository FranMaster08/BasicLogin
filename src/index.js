const express = require("express");
const morgan = require("morgan");
const controller = require("./controller/user");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.get("/", controller.find);
app.get("/:id", controller.finOne);
app.post("/", controller.create);
app.put("/:id", controller.update);
app.delete("/:id", controller.deleted);
app.post("/login", controller.login);

app.listen(3000, () => {
  console.log(`listen in port 3000`);
});
