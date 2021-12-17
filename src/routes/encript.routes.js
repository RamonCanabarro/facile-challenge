const { Router } = require("express")
const route = Router()
const controllerEncripts = require("../controllers/encript.controller")

route.get("/encripts/:id", controllerEncripts.getEncript)
route.post("/encripts", controllerEncripts.createEncript)

module.exports = route