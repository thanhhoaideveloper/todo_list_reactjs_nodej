const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/TodoList", { autoIndex: true })
  .then(() => {
    console.log("Connect DB Successfully!");
  });
