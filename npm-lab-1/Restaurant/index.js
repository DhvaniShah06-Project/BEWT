const express = require("express");
const { routeRestaurant } = require("./routes/restaurants.routes");
const { routeUser } = require("./routes/users.routes");
// const { checkToken } = require("./middlewares/auth.middleware");
const app = express();

// app.use(checkToken);

app.use("/restaurants", routeRestaurant);
app.use("/users", routeUser);

app.listen(3000, () => {
  console.log("Server started");
});