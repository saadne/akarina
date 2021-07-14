const { Router } = require("express");
const { createLand } = require("../controllers/land.controller");
const router = Router();

router.post("/create", createLand)
module.exports = router;