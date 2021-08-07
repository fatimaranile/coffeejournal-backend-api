const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};
// research cors
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// synchronize database using sequelize.
db.sequelize.sync();

// Sample GET route
app.get("/", (request, response) => {
  response.json({
    message: "Welcome to coffee journal backend API.",
  });
});

// calls the user routes file with the app as an argument.
require("./app/routes/route")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
