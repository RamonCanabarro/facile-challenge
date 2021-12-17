const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const encriptRoutes = require("./routes/encript.routes")
const app = express()
const morgan = require("morgan")
require("./database")

app.unsubscribe(cors({
    origin: "*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(encriptRoutes)
app.get("/", function (req, res) {
  res.status(200).json({success: "FACILE CHALLENGE!!!!"})
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});