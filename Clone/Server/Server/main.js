const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const url="mongodb://localhost:27017/Movit"
const authRoute = require("./Routes/auth");
//const userRoute = require("./routes/users");
//const movieRoute = require("./routes/movies");
//const listRoute = require("./routes/lists");
const PORT= process.env.PORT ||  5000

dotenv.config();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use(express.json());

app.use("/auth", authRoute);

//app.use("/api/users", userRoute);
//app.use("/api/movies", movieRoute);
//app.use("/api/lists", listRoute);


