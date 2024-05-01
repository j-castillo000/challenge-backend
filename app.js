const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const server = require("http").createServer(app);

app.use("/blog/v1", require("./routes/auth"));
app.use("/blog/v1", require("./routes/post"));
app.use("/blog/v1", require("./routes/comment"));

server.listen(process.env.PORT || 3000, (error) => {
  if (error) throw new Error(error);
  console.log("Server running on port", process.env.PORT || 3000);
});
