const route = require("express").Router();
const middware = require("./controllers");

route.post("/", middware.verifyLink, middware.addLink);

route.get("/:u", middware.redirectLink);

module.exports = route;